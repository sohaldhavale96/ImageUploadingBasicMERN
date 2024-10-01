const http = require('http')
const app = require('./app')
const server = http.createServer(app)
require('dotenv').config()

try{
    server.listen(process.env.PORT||3001,()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
}catch(err){
    console.log(err)
}