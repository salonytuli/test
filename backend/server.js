const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const reqData = require('./controller/controller')
const app = express()
app.use(cors())

app.use(bodyParser.json())
app.get('/display', reqData)

app.listen(3001, () => console.log(`Listening on port!`))
