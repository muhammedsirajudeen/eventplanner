require("dotenv").config()
const express=require("express")
const router=express.Router()

const jwt=require("jsonwebtoken")
const User=require("../database/model/UserModel")()


router.get('/student',async (req,res)=>{
    let students=await User.find()
    res.json({message:"success",students:students})
})




module.exports=router

