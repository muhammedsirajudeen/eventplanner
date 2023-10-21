import { useContext, useEffect, useState } from "react";
import { View ,Text, TextInput, Button, Alert} from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AdminDataScreen({navigation}){

    const [eventname,setEventname]=useState()
    const [eventdate,setEventdate]=useState()
    const [collegename,setCollegename]=useState()
    const [description,setDescription]=useState()
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
            } else{
                navigation.navigate("Admin")
            }         
        }
        getToken()
    },[])
    async function addeventHandler(){
        let response=await axios.post(url+"/event/addevent",
        {
            eventname:eventname,
            eventdate:eventdate
        })
        if(response.data.message==="success"){
            setEventdate("")
            setEventname("")
            setDescription("")
            Alert.alert("added successfully")

        }
        else{
            Alert.alert("re add the data")
        }

    }
    return(
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
            
        </View>
    )
}