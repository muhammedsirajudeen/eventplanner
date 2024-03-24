const express=require("express")
const User=require("../database/model/UserModel")()
const AdminUser=require("../database/model/AdminUserModel")()
const jwt=require("jsonwebtoken")
const router=express.Router()
const nodemailer = require('nodemailer');

let CURRENT_OTP=""

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muhammedsirajudeen29@gmail.com',
        pass: 'eilq xprp yolv yjrv',
    },
});
// Generate a random four-digit number
function generateRandomFourDigitNumber() {
    // Generate a random number between 1000 and 9999
    return Math.floor(1000 + Math.random() * 9000);
}

// Example usage



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
            console.log(doc)
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
            CURRENT_OTP=generateRandomFourDigitNumber()
            const mailOptions = {
                from: 'muhammedsirajudeen29@gmail.com',
                to: 'sangeethkavumpurath123@gmail.com',
                subject: 'OTP',
                text: CURRENT_OTP.toString() ,
            };
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    res.json({message:"resubmit details"})

                    return console.log('Error:', error);

                }
                console.log('Message sent:', info.response);
                await newUser.save()

                res.json({message:"success"})

            });
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
router.post('/verifyotp',async (req,res)=>{
    try{
        let {otp}=req.body
        console.log(otp,CURRENT_OTP)
        if(otp===CURRENT_OTP.toString()){
            res.json({message:"success"})
        }else{
            res.json({message:"invalid otp"})
        }
    }catch(error){
        console.log(error)
        res.json({message:"error"})
    }
})







module.exports=router