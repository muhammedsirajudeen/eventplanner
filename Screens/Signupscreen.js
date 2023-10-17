import { View ,Text, StyleSheet, TextInput, Button} from "react-native";
import loginStyle from "../Stylesheet/loginStyle";
import { useState } from "react";
export default function Loginscreen(){
    
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()

    function handleLogin(){
        //request to server here
    }
    return(
        <View style={loginStyle.maincontainer} >
            <View style={loginStyle.logincontainer}>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setUsername(value)} placeholder="enter your username"></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setPassword(value) } placeholder="enter your username"></TextInput>
                <Button title="Login" onPress={handleLogin} ></Button>
            </View>

        </View>

    )    

        
    
}

