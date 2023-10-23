import { View,Text, TextInput, Button } from "react-native"
import addmarkStyle from "../Stylesheet/addmarkStyle"
import { useState } from "react"
export default function AddMarkscreen(){
    const [name,setName]=useState()
    const [grade,setGrade]=useState()

    function uploadHandler(){
        //data to server here
    }
    return(
        <View style={addmarkStyle.maincontainer} >
            <View style={addmarkStyle.subcontainer}>
                <TextInput  style={addmarkStyle.input} placeholder="enter student name" value={name} onChangeText={(value)=> setName(value) }  ></TextInput>
                <TextInput  style={addmarkStyle.input} placeholder="enter student overall grade" value={grade} onChangeText={(value)=> setGrade(value)} ></TextInput>
                <Button title="upload mark" onPress={uploadHandler} ></Button>
            </View>
        </View>
    )
}