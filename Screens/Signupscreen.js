import { View ,Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import loginStyle from "../Stylesheet/loginStyle";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Context";
export default function Loginscreen(){
    const url=useContext(UserContext)
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmpassword]=useState()
    async function handleSignup(){
        if(password!==confirmpassword){
           Alert.alert("password not same")
            console.log(password,confirmpassword)
            setPassword("")
            setConfirmpassword("")
            setPasswordnotsame(true)
            
        }else{
            console.log(password,confirmpassword)
            let response=await axios.post(url+"/signup",
            {
                username:username,
                password:password
            })
            console.log(response.data)
            setPasswordnotsame(false)
    
        }

    }
    return(
        <View style={loginStyle.maincontainer} >
            <View style={loginStyle.logincontainer}>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setUsername(value)} placeholder="enter your username" value={username} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setPassword(value) } placeholder="enter your username"value={password} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setConfirmpassword(value) } placeholder="confirm your password" value={confirmpassword} ></TextInput>
                <Button title="Login" onPress={handleSignup} ></Button>
                
            </View>

        </View>

    )    

        
    
}

