const mongoose=require("mongoose")

const GradeModelSchema=mongoose.Schema(
    {
        name:String,
        grade:String,
        college:String,
        semester:String
    }
)

let Grade;

function GradeModel(){
    if(Grade) return Grade
    else return mongoose.model("grade",GradeModelSchema)
}
module.exports=GradeModel