import { View,Text, TextInput,Button, Alert } from "react-native";
import adminStyle from "../Stylesheet/adminStyle"
import { useContext, useState } from "react";
import UserContext from "../Context";
import axios from "axios";
export default function Adminscreen({navigation}){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const url=useContext(UserContext)
    async function loginHandler(){
        let response=await axios.post(url+"/adminlogin",{
            username:username,
            password:password
        })
        if(response.data.message==="success"){
            Alert.alert("success")
            navigation.navigate("AdminData")
        }else{
            Alert.alert(response.data.message)
        }
    }
    return(
        <View style={adminStyle.maincontainer} >
            <View  style={adminStyle.subcontainer}>
                <Text style={adminStyle.heading}>ADMIN LOGIN</Text>
                <TextInput style={adminStyle.input} placeholder="username" onChangeText={(value)=>setUsername(value)} value={username}  ></TextInput>
                <TextInput style={adminStyle.input} placeholder="password" onChangeText={(value)=>setPassword(value)} value={password}  ></TextInput>
                <Button title="login" onPress={loginHandler} ></Button>
            </View>
        </View>
    )
}