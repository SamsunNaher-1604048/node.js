require("dotenv").config()

const express= require('express')
const app=express()
const port=process.env.port||3000

app.get("/",(req,res)=>{
    res.send("hello this is home route");
})

app.listen(port,(req,res)=>{
    console.log(`server running at http://localhost:${port}`)
})