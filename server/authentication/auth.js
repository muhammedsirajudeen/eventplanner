const express=require("express")
const User=require("../database/model/UserModel")()
const AdminUser=require("../database/model/AdminUserModel")()
const jwt=require("jsonwebtoken")
const router=express.Router()


//add middleware for jwt authentication
const secretKey="secret123"

router.post('/createtoken',async (req,res)=>{
    let token=jwt.sign(req.body,secretKey)
    res.json({message:"success",token:token})
})

router.post('/verifytoken',async (req,res)=>{
    let token=req.body.token
    try{
        if(req.body.role==="admin"){
            let decoded=jwt.verify(token,secretKey)
            let doc=await AdminUser.findOne({username:decoded.username})
    
            res.json({message:"success",decoded:doc})

        }
        else{
            let decoded=jwt.verify(token,secretKey)
            let doc=await User.findOne({username:decoded.username})
    
            res.json({message:"success",decoded:doc})
                
        }
    
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }
})

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


router.post('/adminlogin',async (req,res)=>{
    try{
        let docs=await AdminUser.findOne({username:req.body.username})
        if(docs){
           
            if(docs.username===req.body.username && docs.password===req.body.password) res.json({message:"success"})
            else res.json({message:"invalid credentialss"})
            
        }else{
            res.json({message:"there is no user by that name"})
        }
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }
})





module.exports=router