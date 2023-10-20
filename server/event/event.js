const express=require("express")
const router=express.Router()


router.post('/addevent',async (req,res)=>{
    console.log(req.body)
    res.json({message:"success"})

})


module.exports=router