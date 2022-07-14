const express=require("express");
const app=express();
const port=3000;

//export 
const userRoute=require("./routes/route");
const productRoute=require("./routes/product.route");

const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(userRoute);
app.use(productRoute);



app.get("/",(req,res)=>{
   res.send("it is home route")
})


app.use((req,res,next)=>{
    res.status(404).json({
        message:"page not found"
    })
})


app.listen(port,()=>{
    console.log(`this server running at http://localhost:${port}`)
})