const express=require("express")
const app=express()
const cors=require("cors")
const dbConnect=require("./database/connection")
const authentication=require("./authentication/auth")
const event=require("./event/event")
const grade=require("./grade/grade")
app.use(cors())
app.use(express.json())
dbConnect()
//add route here
app.use('/',authentication)
app.use('/event',event)
app.use('/grade',grade)


app.get('/',(req,res)=>{
    res.send("hey")
})

//starting server here
app.listen(3000,'192.168.1.6',()=> console.log("server started at 3000"))