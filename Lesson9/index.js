const express=require('express');
const app=express();
const port = 3000;
const bodyParser=require('body-parser');

//request with query parameter.
// app.get("/",(req,res)=>{
//    id =req.query.id;
//    res.send(`student id is=${id}`)
// })

//request with route parameter

// app.get("/userid/:id/userage/:age",(req,res)=>{
//    const id =req.params.id;
//    const age=req.params.age;

//    res.send(`student id= ${id},age= ${age}`)

// })


//request with header

// 

//work with jsom data

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/",(req,res)=>{
    const name=req.body.name;
    res.send(`welcom ${name}`);

})
app.listen(port,()=>{
    console.log(`this server is runing at http://localhost:${port}`)
})