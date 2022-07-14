const products = require("../models/productsModel")
const path=require("path")

exports.getProduct=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/product.html"));
}

exports.postProduct=(req,res)=>{
    const name=req.body.name
    const price=Number(req.body.price)
    const product ={
        name,
        price
    }
    products.push(product)
    res.status(201).json({
        message:'success',
        products
    })
}