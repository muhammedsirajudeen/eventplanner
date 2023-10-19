import { View ,Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import loginStyle from "../Stylesheet/loginStyle";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Context";
export default function Loginscreen({navigation}){
    
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const url=useContext(UserContext)
    async function handleLogin(){
        let response=await axios.post(url+"/login",
            {
                username:username,
                password:password
            })
        if(response.data.message==="success"){
            Alert.alert("successful login")
            navigation.navigate("Home")
        }else{
            Alert.alert(response.data.message)
            setPassword("")
        }
        }

    return(
        <View style={loginStyle.maincontainer} >
            <View style={loginStyle.logincontainer}>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setUsername(value)} placeholder="enter your username" value={username} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setPassword(value) } placeholder="enter your password" value={password} ></TextInput>
                <Button title="Login" onPress={handleLogin} ></Button>
            </View>

        </View>

    )    

        
    
}

