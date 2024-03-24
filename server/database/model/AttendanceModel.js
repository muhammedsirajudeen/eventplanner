const mongoose=require("mongoose")

const AttendanceModelSchema=mongoose.Schema(
    {
        admissionnumber:String,
        attendance:String,
        semester:String,
        college:String,
    }
)

let Attendance;

function AttendanceModel(){
    if(Attendance) return Attendance
    else return mongoose.model("attendance",AttendanceModelSchema)
}
module.exports=AttendanceModel