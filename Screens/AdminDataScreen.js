import { useContext, useState } from "react";
import { View ,Text, TextInput, Button, Alert} from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import axios from "axios";
export default function AdminDataScreen(){

    const [eventname,setEventname]=useState()
    const [eventdate,setEventdate]=useState()
    const url=useContext(UserContext)
    async function addeventHandler(){
        let response=await axios.post(url+"/event/addevent",
        {
            eventname:eventname,
            eventdate:eventdate
        })
        if(response.data.message==="success"){
            setEventdate("")
            setEventname("")
            Alert.alert("added successfully")

        }
        else{
            Alert.alert("re add the data")
            setEventdate("")
            setEventname("")
        }

    }
    return(
        <View style={admindataStyle.maincontainer} >

            <View style={admindataStyle.subcontainer}>
                <Text style={admindataStyle.heading} >ADD EVENT</Text>
                <TextInput style={admindataStyle.input} placeholder="event name" value={eventname} onChangeText={(value)=> setEventname(value)}  ></TextInput>
                <Text style={admindataStyle.dateheading}>please follow dd-mm-yyyy format</Text>
                <TextInput style={admindataStyle.input} placeholder="event date" value={eventdate} onChangeText={(value)=> setEventdate(value)} ></TextInput>
                <Button title="addevent" onPress={addeventHandler} ></Button>
          </View>
            
        </View>
    )
}