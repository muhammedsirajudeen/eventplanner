import { View ,Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import loginStyle from "../Stylesheet/loginStyle";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Context";
export default function Loginscreen( {navigation} ){
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
            
        }else{
            console.log(password,confirmpassword)
            let response=await axios.post(url+"/signup",
            {
                username:username,
                password:password
            })
            if(response.data.message!=="success"){
                Alert.alert(response.data.message)
                setUsername("")
                setPassword("")
                setConfirmpassword("")
            }else{
                Alert.alert("user created")
                navigation.navigate('Login')
            }
    
        }

    }
    function handleLoginclick(){
        navigation.navigate("Login")
    }
    return(
        <View style={loginStyle.maincontainer} >
            <View style={loginStyle.logincontainer}>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setUsername(value)} placeholder="enter your username" value={username} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setPassword(value) } placeholder="enter your username"value={password} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setConfirmpassword(value) } placeholder="confirm your password" value={confirmpassword} ></TextInput>
                <Button title="Signup" onPress={handleSignup} ></Button>
                <Button title="continue to login" onPress={handleLoginclick}></Button>
            </View>

        </View>

    )    

        
    
}

