const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser } = require("../auth/authenticate")
const jwt = require("jsonwebtoken")

const Usuario = require("../models/user")
const passport = require("passport")
require("dotenv").config()
const mails = require("../mail/mails");

var express = require('express'),
    router = express.Router();

// Add a binding for '/tests/automated/'
router.post("/signup", (req, res, next) => {
    // Verify that first name is not empty
    if (!req.body) {
        res.statusCode = 500
        res.send({
            name: "Body Empty",
            message: "The body is required",
        })
    } else {
        Usuario.register(
            new Usuario({ username: req.body.correo_Electronico }),
            req.body.password,
            (err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    user.nombre = req.body.nombre
                    user.Fecha_de_Nacimiento = req.body.Fecha_de_Nacimiento || "sin definir"
                    user.sexo = req.body.sexo || "sin definir"
                    user.correo_Electronico = req.body.correo_Electronico || ""
                    const token = getToken({ _id: user._id })

                    const refreshToken = getRefreshToken({ _id: user._id })
                    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

                    if (payload) {
                        console.log("verify working")
                    } else {
                        console.log("verify not working")
                    }
                    user.refreshToken.push({ refreshToken })

                    const EmailToken = 'csf_token_' + Math.random().toString(36).substr(2, 9);
                    link = "http://" + req.get('Host') + "/api/user/verify?token=" + EmailToken + "&correo_Electronico=" + user.correo_Electronico;
                    console.log("Sending email:");
                    user.EmailToken = EmailToken;
                    try {
                        mails.sendValidation(link, user.correo_Electronico);
                    } catch (error) {
                        console.error(error)
                    }

                    user.save((err, user) => {
                        if (err) {
                            res.statusCode = 500
                            res.send(err)

                        } else {
                            console.log("refreshtoken: " + refreshToken)
                            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                            res.send({ success: true, token, refreshToken })
                            console.log("token: " + token)
                            // console.log(user)
                        }
                    })
                }
            }
        )
    }
})

router.get('/verify', function (req, res) {
    Host = "localhost:3000";
    FrontEndHostLogin = "http://localhost:3006/auth/login";
    console.log(req.protocol + ":/" + req.get('Host'));
    const { token } = req.query;
    // console.log("token:" + token);
    const { correo_Electronico } = req.query;
    devmode = 1;
    // console.log("ID_Usuario:" + ID_Usuario);
    if (((req.protocol + "://" + req.get('Host')) == ("http://" + Host)) || devmode) {
        console.log("Domain is matched. Information is from Authentic email");
        // console.log("Generating query: CALL `validateToken`(?, ?);" + [token, ID_Usuario]);

        Usuario.findOne({ correo_Electronico: correo_Electronico }).then(
            user => {
                if (user) {
                    if (token == user.EmailToken) {
                        user.EmailToken = ""
                    } else {
                        console.log("token invalido")
                        res.send(501)
                    }

                    user.save((err, user) => {
                        if (err) {
                            res.statusCode = 500
                            console.log("500 error user not saved")
                            res.send(err)
                        } else {
                            console.log("A user has been verified!!!")
                            res.end(`<h1>Tu usuario ha sido verificado acceder a <a href="${FrontEndHostLogin}">${FrontEndHostLogin}</a> para iniciar sesión </h1>`);
                            // res.send({ success: true, message: "Tu usuario ha sido verificado" })
                        }
                    })
                } else {
                    console.log("500 error user not saved")
                    res.send(err)
                }
            }
        )
    } else
        res.end(`<h1>Request is from unknown source: ${req.protocol}://${req.get('Host')} == http://${Host}}`);
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    const userID = req.user._id;
    const token = getToken({ _id: userID })
    const refreshToken = getRefreshToken({ _id: userID })
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    if (payload) {
        console.log("verify working")
    } else {
        console.log("verify not working")
    }
    Usuario.findById(userID).then(
        user => {
            user.refreshToken.push({ refreshToken })
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    console.log(user.EmailToken)
                    if(user.EmailToken != ""){
                        res.statusCode = 402
                        res.send({ success: false })

                    } else {
                        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                        res.send({ success: true, token, refreshToken, user })
                    }
                }
            })
        },
        err => next(err)
    )
})

router.post("/refreshToken", (req, res, next) => {
    const { signedCookies = {} } = req
    var { refreshToken } = signedCookies


    if (!refreshToken) {
        // console.log("getting refretoken from req.body")
        refreshToken = req.body.refreshToken;
    }

    if (refreshToken) {
        try {
            // console.log("Verify tokens, refresh secrt: " + process.env.REFRESH_TOKEN_SECRET)
            // console.log("Verify tokens, refresh signd cooks: " + refreshToken)
            // to fix:
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            // console.log("Verified tokens")
            const userId = payload._id
            // console.log("Searching User: id=" + userId)
            Usuario.findOne({ _id: userId }).then(
                user => {
                    if (user) {
                        // console.log("Founded User")

                        // Find the refresh token against the user record in database
                        const tokenIndex = user.refreshToken.findIndex(
                            item => item.refreshToken === refreshToken
                        )

                        if (tokenIndex === -1) {
                            // console.warn("Unauthorized request!")
                            res.statusCode = 401
                            res.send("Unauthorized: ")
                        } else {
                            const token = getToken({ _id: userId })
                            // If the refresh token exists, then create new one and replace it.
                            const newRefreshToken = getRefreshToken({ _id: userId })
                            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken }
                            user.save((err, user) => {
                                if (err) {
                                    res.statusCode = 500
                                    console.log("500 error")

                                    res.send(err)
                                } else {
                                    // console.log("new refresh token")
                                    res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS)
                                    res.send({ success: true, token, refreshToken: newRefreshToken })
                                }
                            })
                        }
                    } else {
                        res.statusCode = 401
                        res.send("Unauthorized")
                    }
                },
                err => next(err)
            )
        } catch (err) {
            res.statusCode = 401
            res.send("Unauthorized. user or payload not working")
        }
    } else {
        res.statusCode = 401
        res.send("Unauthorized. RefreshToken not found")
    }
})

router.post("/logout", verifyUser, (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies

    if (!refreshToken) {
        // console.log("getting refretoken from req.body")
        refreshToken = req.body.refreshToken;
    }

    Usuario.findById(req.user._id).then(
        user => {
            const tokenIndex = user.refreshToken.findIndex(
                item => item.refreshToken === refreshToken
            )

            if (tokenIndex !== -1) {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
            }

            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.clearCookie("refreshToken", COOKIE_OPTIONS)
                    res.send({ success: true })
                }
            })
        },
        err => next(err)
    )
})

router.get("/me", verifyUser, (req, res, next) => {
    res.send(req.user)
})


module.exports = router;
