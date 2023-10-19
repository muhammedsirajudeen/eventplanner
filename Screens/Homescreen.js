import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { View ,Text, Button} from "react-native";
import UserContext from "../Context";
import homeStyle from "../Stylesheet/homeStyle";
import { Link } from '@react-navigation/native';

export default function Homescreen({navigation}){
    const url=useContext(UserContext)
    const [userobject,setUserobject]=useState({username:undefined,password:undefined})
    useEffect(()=>{
        async function tokenverifier(){
            let token=await AsyncStorage.getItem('token')
            let response=await axios.post(url+"/verifytoken",{
                token:token
            })
            console.log(response.data.decoded)
            if(response.data.message==="success"){
                setUserobject(response.data.decoded)
            }else{
                navigation.navigate('Login')
            }
        }
        tokenverifier()
    },[])

    return(
        <View style={homeStyle.maincontainer} >
            <View style={homeStyle.navigationcontainer}>
                <Text style={homeStyle.usertext} > {userobject.username} </Text>
                <Link  to={{screen:'Profile'}}>Profile</Link>
                <Link  to={{screen:'Event'}}>Event</Link>
                

            </View>

        </View>

    )    

        
    
}