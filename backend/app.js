const express = require('express')
const app = express()
const dataRoute = require('./routes/data.route')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload({ 
    useTempFiles:true,
    tempFileDir : '/tmp/'
}));
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log("Not connected"+err)
})

app.use('/data',dataRoute)

module.exports = app