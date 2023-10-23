const express=require("express")
const router=express.Router()
const Event=require("../database/model/EventModel")()
const AdminUser=require("../database/model/AdminUserModel")()
const jwt=require("jsonwebtoken")
require('dotenv').config();

router.post('/addevent',async (req,res)=>{
    console.log(req.body)
    try{
        const decoded=jwt.verify(req.body.token,process.env.SECRET_KEY)
        let doc=await AdminUser.findOne({username:decoded.username})
        req.body.eventcollege=doc.college
        let newEvent=new Event(req.body)
        newEvent.save()
        res.json({message:"success"})

    }catch(error){
        console.log(error)
        res.json({message:"error occured"})
    }
})

router.post("/getevent",async (req,res)=>{
    let token=req.body.token
    try{
        let decoded=jwt.verify(token,process.env.SECRET_KEY)
        let doc=await AdminUser.findOne({username:decoded.username})
        let eventdoc=await Event.find({eventcollege:doc.college})
        
        if(eventdoc)  res.json({message:"success",eventarray:eventdoc})
        else res.json({message:"success",eventarray:[]})
    }catch(error){
        console.log(error)
        res.json({message:"error occured"})
    }
})

router.delete("/popevent/:id",async (req,res)=>{
    const id=req.params.id

    try{
        await Event.findByIdAndRemove(id)
        res.json({message:"success"})
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }
})


module.exports=router