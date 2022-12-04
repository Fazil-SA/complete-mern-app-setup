require('dotenv').config()
const express = require('express')

//express app
const app = express()

//middlewares
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//routes
app.get('/',(req,res) => {
    res.json({mssg : "hello"})
})

//listen requests
app.listen(process.env.PORT,() => {
    console.log(`server started listening on port ${process.env.PORT}`)
})