import { View,Text, TextInput, TouchableOpacity } from "react-native";
import emailverificationStyle from "../Stylesheet/emailverificationStyle";
import { useContext, useState } from "react";
import axios from "axios"
import UserContext from "../Context";
export default function EmailVerification({navigation}){
    const [otp,setOtp]=useState("")
    const url=useContext(UserContext)
    async function verifyHandler(){
        let response=(await axios.post(url+"/verifyotp",
        {
            otp:otp
        })).data
        if(response.message==="success"){
            alert("verified successfully")
            navigation.navigate('Login')
        }else{
            alert(response.message)
        }
    }
    return(
        <View style={emailverificationStyle.maincontainer} >
            <View style={emailverificationStyle.logincontainer}>
                <Text style={emailverificationStyle.emailtext}>VERIFY OTP SEND TO EMAIL</Text>
                <TextInput inputMode="numeric" style={emailverificationStyle.textinput} placeholder="enter otp" onChangeText={(text)=>setOtp(text)} value={otp} ></TextInput>
                <TouchableOpacity style={emailverificationStyle.verifybutton} onPress={verifyHandler} >
                    <Text style={emailverificationStyle.verifytext}>Verify</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}