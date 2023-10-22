import { useContext, useEffect, useState } from "react";
import { View ,Text, TextInput, Button, Alert} from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function AdminDatascreen({navigation}){
    const [collegename,setCollegename]=useState()

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
    

    return(
        <View style={admindataStyle.maincontainer} >
            <View style={admindataStyle.navigationcontainer}>
                <Text style={admindataStyle.collegename} >  {collegename} </Text>
            </View>

            <View style={admindataStyle.subcontainer}>

                <Button title="addschedule" onPress={()=> navigation.navigate("AddSchedule")}></Button>
                <Button title="addattendance" onPress={()=>navigation.navigate("AddAttendance")}></Button>
                <Button title="addmarks" onPress={()=>navigation.navigate("AddMark")}></Button>
                <Button title="addevent" onPress={()=>navigation.navigate("AddEvent")} ></Button>
          </View>
            
        </View>
    )
}