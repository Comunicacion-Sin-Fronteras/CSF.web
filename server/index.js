const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')

const database = require('./database')
const router = require('./router/router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', router)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

