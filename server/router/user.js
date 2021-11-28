const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser } = require("../auth/authenticate")

const Usuario = require("../models/user")
const passport = require("passport")
require("dotenv").config()

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
                    user.refreshToken.push({ refreshToken })
                    user.save((err, user) => {
                        if (err) {
                            res.statusCode = 500
                            res.send(err)

                        } else {
                            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                            res.send({ success: true, token })
                            console.log(user)
                        }
                    })
                }
            }
        )
    }
})

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    const token = getToken({ _id: req.user._id })
    const refreshToken = getRefreshToken({ _id: req.user._id })
    Usuario.findById(req.user._id).then(
        user => {
            user.refreshToken.push({ refreshToken })
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                    res.send({ success: true, token })
                }
            })
        },
        err => next(err)
    )
})

router.post("/refreshToken", (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies

    if (refreshToken) {
        try {
            console.log("Verify tokens, refresh secrt: " + process.env.REFRESH_TOKEN_SECRET)
            console.log("Verify tokens, refresh signd cooks: " + refreshToken)
            // to fix:
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            console.log("Verified tokens")
            const userId = payload._id
            console.log("Searching User")
            User.findOne({ _id: userId }).then(
                user => {
                    if (user) {
                        // Find the refresh token against the user record in database
                        const tokenIndex = user.refreshToken.findIndex(
                            item => item.refreshToken === refreshToken
                        )

                        if (tokenIndex === -1) {
                            res.statusCode = 401
                            res.send("Unauthorized")
                        } else {
                            const token = getToken({ _id: userId })
                            // If the refresh token exists, then create new one and replace it.
                            const newRefreshToken = getRefreshToken({ _id: userId })
                            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken }
                            user.save((err, user) => {
                                if (err) {
                                    res.statusCode = 500
                                    res.send(err)
                                } else {
                                    res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS)
                                    res.send({ success: true, token })
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
            res.send("Unauthorized. Trying payload")
        }
    } else {
        res.statusCode = 401
        res.send("Unauthorized. RefreshToken not found")
    }
})

router.get("/logout", verifyUser, (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
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
