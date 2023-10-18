const express=require("express")
const app=express()
const cors=require("cors")

const authentication=require("./authentication/auth")

app.use(cors())
app.use(express.json())

//add route here
app.use('/',authentication)

app.listen(3000,()=> console.log("server started"))