require("dotenv").config()
const express=require("express")
const router=express.Router()

const jwt=require("jsonwebtoken")
const User=require("../database/model/UserModel")()
const Grade=require("../database/model/GradeModel")()
const AdminUser=require("../database/model/AdminUserModel")()
const Attendance=require("../database/model/AttendanceModel")()
const Notice=require("../database/model/NoticeModel")()
const Event=require("../database/model/EventModel")()

router.get('/student',async (req,res)=>{
    let students=await User.find()
    res.json({message:"success",students:students})
})

router.get('/data',async (req,res)=>{
    console.log("hit")
    let querytype=req.query.querytype
    if(querytype==="grade"){
        let grade=await Grade.findOne({admissionnumber:req.query.id,semester:req.query.semester})
        console.log(grade)
        if(grade){
            res.json({message:"success",grade:grade})
        }else{
        res.json({message:"admission number not found"})

        }
        

    }
    else if(querytype==="attendance"){
        let attendance=await Attendance.findOne({admissionnumber:req.query.id,semester:req.query.semester})
        console.log(attendance)
        if(attendance){
            res.json({message:"success",grade:attendance})
        }else{
        res.json({message:"admission number not found"})

        }

    }
    else if(querytype==="notice"){
        let notice=await Notice.find()
        res.json({message:"success",notice:notice})
    }
    else{
        res.json({message:"data not found"})
    }
}
)
router.post('/data',async (req,res)=>{
    let querytype=req.query.querytype
    if(querytype==="grade"){
        let grade=await Grade.findOne({admissionnumber:req.body.admissionnumber,semester:req.body.semester})
        console.log(grade)
        if(grade){
            grade.grade=req.body.grade
            await grade.save()
            res.json({message:"success"})
        }else{
        res.json({message:"admission number not found"})

        }

    }

})

router.delete("/data",async (req,res)=>{
    let querytype=req.query.querytype
    let id=req.query.id
    console.log(id)
    if(querytype==="notice"){
        let notice=await Notice.deleteOne({_id:id})
        if(notice){
            res.json({message:"success"})
        }
    }
})





module.exports=router

