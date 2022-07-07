const express=require('express')
const app=express()
const port =3000;
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/page/cir.html")
})

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/page/tri.html")
})

app.post("/circle",(req,res)=>{
 const radius=req.body.radious;
 const area=3.1416*radius*radius
 res.send(`<h1>the area of triangle is:${area} </h1>`)
})

app.post("/triangle",(req,res)=>{
    const hight=req.body.hight;
    const base=req.body.base;
    const area=0.5*hight*base
    res.send(`<h1>the area of triangle is:${area}</h1>`)
})

app.listen(port,()=>{
    console.log(`server is running at:http://localhost:${port}`)
})