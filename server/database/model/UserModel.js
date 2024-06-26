const mongoose=require("mongoose")

let User;

const UserSchema=mongoose.Schema(
    {
        username:String,
        password:String,
        course:String,
        college:String,
        admissionnumber:String,
    }
)

function UserModel(){
    if(User) return User
    else return mongoose.model("user",UserSchema)
}

module.exports=UserModel