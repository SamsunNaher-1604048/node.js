const express=require('express')
const app=express()
const port=3000

//static middle ware


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(port,(req,res)=>{
    console.log(`this server running at http://localhost:${port}`)
})