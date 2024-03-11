require("dotenv").config()
const express=require("express")
const router=express.Router()

const Grade=require("../database/model/GradeModel")()
const AdminUser=require("../database/model/AdminUserModel")()
const Attendance=require("../database/model/AttendanceModel")()
const Notice=require("../database/model/NoticeModel")()


const jwt=require("jsonwebtoken")
const UserModel = require("../database/model/UserModel")()
const secretKey="secret123"

router.get('/notice',async (req,res)=>{
    console.log("hit")
    let notice=await Notice.find()

    res.json({message:"success",notice:notice})
})

router.post('/details',async (req,res)=>{
    console.log("hit")
    let decoded=jwt.verify(req.body.token,secretKey)

    let doc=await UserModel.findOne({username:decoded.username})
    let grade=await Grade.find({name:decoded.username})
    let attendance=await Attendance.find({name:decoded.username})
    res.json({message:"success",profile:doc,attendance:attendance,grade:grade})
})



router.post('/addgrade',async (req,res)=>{
    console.log(req.body)
    let decoded=jwt.verify(req.body.token,secretKey)

    let doc=await AdminUser.findOne({username:decoded.username})
    console.log(doc)
    let grade=new Grade(
        {
            name:req.body.name,
            grade:req.body.grade,
            college:doc.college,
            semester:req.body.semester
        }
    )
    try{
        await grade.save()
        res.json({message:"success"})

    }catch(error){
        console.log(error)
        res.json({message:"error"})

    }
})

router.post('/addattendace',async (req,res)=>{
    console.log(req.body)
    let decoded=jwt.verify(req.body.token,secretKey)

    let doc=await AdminUser.findOne({username:decoded.username})
    console.log(doc)
    try{
        let attendance=new Attendance(
            {
                name:req.body.name,
                semester:req.body.semester,
                attendance:req.body.attendance,
                college:doc.college
            }
        )
        await attendance.save()
        res.json({message:"success"})    

    }catch(error){
        console.log(error)
        res.json({message:"error"})    

    }
})

router.post('/addnotice',async (req,res)=>{
    console.log(req.body)
    let decoded=jwt.verify(req.body.token,secretKey)

    let doc=await AdminUser.findOne({username:decoded.username})
    console.log(doc)
    try{
        let notice= new Notice(
            {
                college:doc.college,
                notice:req.body.notice
            }
        )    
        await notice.save()
        res.json({message:"success"})


    }catch(error){
        console.log(error)
        res.json({message:"error"})    

    }
})


router.get("/changegrade", async (req,res)=>{
    res.json({message:"success"})
})



module.exports=router

