const express=require("express")
const app=express()
const cors=require("cors")
const dbConnect=require("./database/connection")
const authentication=require("./authentication/auth")

app.use(cors())
app.use(express.json())
dbConnect()
//add route here
app.use('/',authentication)

app.listen(3000,()=> console.log("server started"))