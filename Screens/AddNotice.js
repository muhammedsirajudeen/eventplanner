import React, { useState,useContext,useEffect } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import addmarkStyle from "../Stylesheet/addmarkStyle";
import UserContext from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";

import axios from "axios"
export default function AddNotice() {
  const [name, setName] = useState("");
  const [notice, setNotice] = useState("");
  const url = useContext(UserContext);
  const [selectedValue,setSelectedValue]=useState()
  const [students,setStudents]=useState([])
  const [semester,setSemester]=useState("")
  useEffect(()=>{
    async function getAllStudents(){
      let response=(await axios.get(url+"/student/student")).data
      let students=[]
      response.students.forEach((student)=>{
        students.push(student.username)

      })
      console.log(students)
      setStudents(students)
    }
    getAllStudents()
  },[])

  async function uploadHandler() {
    // Data upload to server logic here
    let token=await AsyncStorage.getItem('token')
    let response=(await axios.post(url+"/grade/addnotice",{
      notice:notice,
      token:token,
      }
    )).data
    console.log(response)
    if(response.message==="success"){
      Alert.alert("notice have been updated")
    }
  }

  return (
    <View style={addmarkStyle.maincontainer}>
      <View style={addmarkStyle.subcontainer}>



        <TextInput
          style={addmarkStyle.input}
          placeholder="Enter notice here"
          value={notice}
          onChangeText={(value) => setNotice(value)}
        />

        <Button title="Upload notice" onPress={uploadHandler} color="#007BFF" />
      </View>
    </View>
  );
}
