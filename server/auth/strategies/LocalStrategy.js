const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const user = require("../../models/user")

//Called during login/sign up.
passport.use(new LocalStrategy({
    usernameField: 'correo_Electronico',
    passwordField: 'password'
}, user.authenticate()))

//called while after logging in / signing up to set user details in req.user
passport.serializeUser(user.serializeUser())