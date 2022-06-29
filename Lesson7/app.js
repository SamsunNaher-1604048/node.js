const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("hello i am from get request")
});

app.get("/about",(req,res)=>{
    res.send("set request from about")
});

app.post("/",(req,res)=>{
    res.send("post request")
});

app.put("/",(req,res)=>{
    res.send("put request")
});

app.delete("/",(req,res)=>{
    res.send("delete request")
});

module.exports=app;