const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const passport = require("passport")

const database = require('./database')
const router = require('./router/router')
// import {APIDescriptor} from './router/api_descriptor'

const APIDescriptor = require('./router/api_descriptor');

// require("dotenv").config()
process.env.test = "working";

require("./auth/strategies/JwtStrategy")
require("./auth/strategies/LocalStrategy")
require("./auth/authenticate")

const app = express()
// const apiPort = process.env.SERVER_PORT;

app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.urlencoded({ extended: true }))

//Add the client URL to the CORS policy, with whitelist
const whitelist = process.env.WHITELISTED_DOMAINS
    ? process.env.WHITELISTED_DOMAINS.split(",")
    : []
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }, credentials: true,
}

app.use(cors(corsOptions))
app.use(passport.initialize())

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send(APIDescriptor)
})

app.use('/api', router)

const server = app.listen(process.env.SERVER_PORT || 8081, function(){
    const port = server.address().port
    console.log(`Server running on port ${port}, env status: ${process.env.test}`)
})

