const mongoose=require("mongoose")

const eventSchema=mongoose.Schema(
    {
        eventname:String,
        eventdate:String,
        // eventimage:String,   add this feature is there is enough time
        eventdescription:String,
        eventcollege:String
    }
)


let Event
function EventModel(){
    if(Event)   return Event
    else return mongoose.model("event",eventSchema)


}
module.exports=EventModel