import { useContext, useEffect, useState } from "react";
import { View ,Text, TextInput, Button, Alert, ScrollView} from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AddEventscreen({navigation}){

    const [eventname,setEventname]=useState()
    const [eventdate,setEventdate]=useState()
    const [collegename,setCollegename]=useState()
    const [description,setDescription]=useState()
    const [events,setEvents]=useState([])
    const url=useContext(UserContext)
    useEffect(()=>{
        async function getToken(){
            let token=await AsyncStorage.getItem("token")
            if(token){
                let tokenresponse=await axios.post(url+"/verifytoken",
                {
                    role:"admin",
                    token:token
                }
                )
                setCollegename(tokenresponse.data.decoded.college)
                let eventresponse=await axios.post(url+"/event/getevent",
                {
                    token:token
                }
                )
                console.log(eventresponse.data)
                setEvents(eventresponse.data.eventarray) 
            } else{
                navigation.navigate("Admin")
            }         
        }
        getToken()
    },[])
    async function addeventHandler(){
        let token=await AsyncStorage.getItem("token")
        let response=await axios.post(url+"/event/addevent",
        {
            eventname:eventname,
            eventdate:eventdate,
            eventdescription:description,
            token:token
        })
        if(response.data.message==="success"){
            setEventdate("")
            setEventname("")
            setDescription("")
            Alert.alert("added successfully")
            let eventresponse=await axios.post(url+"/event/getevent",
            {
                token:token
            }
            )
            setEvents(eventresponse.data.eventarray)
        }
        else{
            Alert.alert("re add the data")
        }

    }

    async function deleteHandler(id){
        console.log(id)
        let response=await axios.delete(url+`/event/popevent/${id}`)
        if(response.data.message==="success"){
            setEvents(events.filter((event)=> event._id!==id))
        }
    }
    return(
        <ScrollView>

        <View style={admindataStyle.maincontainer} >
            <View style={admindataStyle.navigationcontainer}>
                <Text style={admindataStyle.collegename} >  {collegename} </Text>
            </View>

            <View style={admindataStyle.subcontainer}>
                <Text style={admindataStyle.heading} >ADD EVENT</Text>
                <TextInput style={admindataStyle.input} placeholder="event name" value={eventname} onChangeText={(value)=> setEventname(value)}  ></TextInput>
                <Text style={admindataStyle.dateheading}>please follow dd-mm-yyyy format</Text>
                <TextInput style={admindataStyle.input} placeholder="event date" value={eventdate} onChangeText={(value)=> setEventdate(value)} ></TextInput>
                <TextInput style={admindataStyle.input} placeholder="event description" value={description} onChangeText={(value)=> setDescription(value)} ></TextInput>
                
                <Button title="addevent" onPress={addeventHandler} ></Button>


          </View>

          <View style={admindataStyle.eventcontainer}>
                    {events.map((event)=>{
                        return(
                            <View  style={admindataStyle.eventsubcontainer} key={event._id} >
                                <Text> {event.eventname} </Text>
                                <Text> {event.eventdate} </Text>
                                <Button title="delete" onPress={()=> deleteHandler(event._id)}></Button>  
                            </View>
                        )
                    })}
                </View>
            
        </View>
        </ScrollView>

    )
}