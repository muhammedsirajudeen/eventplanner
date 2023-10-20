const mongoose=require("mongoose")

const AdminUserSchema=mongoose.Schema(
    {
        username:String,
        password:String,
        college:String
    }
)
let AdminUser
function AdminUserModel(){
    if(AdminUser) return AdminUser
    else return mongoose.model("adminuser",AdminUserSchema)
}
module.exports=AdminUserModel