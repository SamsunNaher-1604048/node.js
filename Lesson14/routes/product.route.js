
//for route
const express=require("express");
const Proute=express.Router();

//forlogic
const { getProduct, postProduct } = require("../controllers/Productcontroller");

Proute.get("/product",getProduct)
Proute.post("/product",postProduct)

module.exports=Proute;