require("dotenv").config()
const express=require("express")
const router=express.Router()




router.post('/addgrade',async (req,res)=>{
    res.json({message:"success"})
})


router.post("/changegrade", async (req,res)=>{
    res.json({message:"success"})
})

module.exports=router

