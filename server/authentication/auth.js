const express=require("express")
const router=express.Router()



//add middleware for jwt authentication



router.post('/signup',(req,res)=>{
    console.log(req.body)
    res.json({data:"successful"})
})

module.exports=router