const express=require("express")
const User=require("../database/model/UserModel")()

const router=express.Router()


//add middleware for jwt authentication



router.post('/signup',async (req,res)=>{
    console.log(req.body)
    try{
        let docs= await User.findOne({username:req.body.username})
        if(docs){
            res.json({message:"user already present"})
        }else{
            const newUser=new User(req.body)
            await newUser.save()
            res.json({message:"success"})
        }
    
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }

})

router.post('/login',async (req,res)=>{
    console.log(req.body)
    try{
        let docs=await User.findOne({username:req.body.username})
        if(docs){
            console.log(docs)
            if(docs.username===req.body.username && docs.password===req.body.password){
                res.json({message:"success"})
            }else{
                res.json({message:"invalid credentials"})
            }
        }else{
            res.json({message:"create user first"})
    
        }
    
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }

})

module.exports=router