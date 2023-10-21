const express=require("express")
const router=express.Router()
const Event=require("../database/model/EventModel")()

router.post('/addevent',async (req,res)=>{
    console.log(req.body)
    res.json({message:"success"})

})


module.exports=router