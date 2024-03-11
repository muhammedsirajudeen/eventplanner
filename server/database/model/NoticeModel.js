const mongoose=require("mongoose")

const Schema=mongoose.Schema(
    {
        notice:String,
        college:String
    }
)

let Notice;

function NoticeModel(){
    if(Notice) return Notice
    else return mongoose.model("notice",Schema)
}
module.exports=NoticeModel