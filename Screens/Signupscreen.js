import { View ,Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import loginStyle from "../Stylesheet/loginStyle";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Context";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loginscreen( {navigation} ){
    const url=useContext(UserContext)
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmpassword]=useState()
    const [course,setCourse]=useState()
    const [college,setCollege]=useState()
    const courses=["Bsc computer science","BBA","BA ECONOMICS"]
    const colleges=["Ideal College of Arts and Science"]
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
                password:password,
                course:course,
                college:college
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
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setPassword(value) } placeholder="enter your password"value={password} ></TextInput>
                <TextInput style={loginStyle.textinput} onChangeText={(value)=> setConfirmpassword(value) } placeholder="confirm your password" value={confirmpassword} ></TextInput>
                <View style={loginStyle.select}>
                <SelectDropdown defaultButtonText="select course"
                        data={courses}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem)
                            setCourse(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                />

                </View>
                <View style={loginStyle.select}>
                <SelectDropdown defaultButtonText="select college"
                        data={colleges}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem)
                            setCollege(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                />
                    
                </View>
                <View style={loginStyle.button}>
                <Button  style={loginStyle.button} title="Signup" onPress={handleSignup} ></Button>

                </View>
                <View style={loginStyle.button}>
                <Button style={loginStyle.button}  title="continue to login" onPress={handleLoginclick}></Button>

                </View>
            </View>

        </View>

    )    

        
    
}

