const express=require('express');
const app=express();

const userroute=require('./routes/user.routes')
app.use('/api/user/',userroute)

app.get('/',(req,res)=>{
    res.send('this is get method')
    res.end()
})
app.use((req,res)=>{
    res.send('404!!!')
    res.end();
})
module.exports=app;
