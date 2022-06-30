
const express=require('express')
const route=express.Router()

route.get('/login',(req,res)=>{
    res.send('tis is login')
    res.end();
})

route.get('/singin',(req,res)=>{
    res.send('tis is singin')
    res.end();
})
module.exports=route;
