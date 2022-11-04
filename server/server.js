const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
require('./server/config/mongoose.config')
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
require('./server/routes/user.routes')(app)
const port = 8000
app.listen(port, () => console.log(`Listening on port: ${port}`))
