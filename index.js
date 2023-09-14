//import .env file
require('dotenv').config()
//server creation
//express

//1-import express

const express=require('express')
const router = require('./routes/router')
const cors=require('cors')


//2- create server using express
const server=express()

// integrate front-end
server.use(cors())

// to convert all incoming json data to js data
server.use(express.json())

//router set
server.use(router)
-
//import connection.js file

require('./db/connection')

// 3- server run

//port
const port=5002 || process.env.port

server.listen(port,()=>{
    console.log(`____server started at port number ${port}___`);
})

// api calls resolve - post
// server.post('/register',(req,res)=>{
//     res.send("post method workking...")
// })

// server.post('/login',(req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login worked")
// })

// using mvc