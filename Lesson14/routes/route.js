
//for route
const express=require("express");
const route=express.Router();

//forlogic
const { getUser, postUser } = require("../controllers/userController");

route.get("/user",getUser)
route.post("/user",postUser)

module.exports=route;