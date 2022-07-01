const express=require('express');
const app=express();

const userroute=require('./routes/user.routes')
app.use('/api/user/',userroute)

//json file
app.use('/reg',(req,res)=>{
    res.status(200).json({
        name:"nishi",
        message:"hello i am register page",
        status:200,
    });
});

//pass index file
app.use('/login',(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/Login.html")
})

app.get('/',(req,res)=>{
   res.statusCode=200;
   res.sendFile(__dirname+"/views/index.html")
})
app.use((req,res)=>{
    res.send('404!!!')
    res.end();
})
module.exports=app;
