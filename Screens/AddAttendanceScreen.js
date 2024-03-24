import React, { useState,useContext,useEffect } from "react";
import { View, TextInput, Button, Alert,TouchableOpacity,Text } from "react-native";
import addmarkStyle from "../Stylesheet/addmarkStyle";
import UserContext from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import Dialog from "../components/dialog";
import axios from "axios"
export default function AddAttendaceScreen() {
  const [name, setName] = useState("");
  const [attendace, setAttendance] = useState("");
  const url = useContext(UserContext);
  const [selectedValue,setSelectedValue]=useState()
  const [students,setStudents]=useState([])
  const [semester,setSemester]=useState("")
  const [open,setOpen]=useState(false)

  useEffect(()=>{
    async function getAllStudents(){
      let response=(await axios.get(url+"/student/student")).data
      let students=[]
      response.students.forEach((student)=>{
        students.push(student.admissionnumber)

      })
      console.log(students)
      setStudents(students)
    }
    getAllStudents()
  },[])
  async function editHandler(){
    setOpen(true)

  }

  async function uploadHandler() {
    // Data upload to server logic here
    let token=await AsyncStorage.getItem('token')
    let response=(await axios.post(url+"/grade/addattendace",{
      admissionnumber:name,
      attendance:attendace,
      token:token,
      semester:semester
      }
    )).data
    console.log(response)
    if(response.message==="success"){
      Alert.alert("attendace have been updated")
    }
  }

  return (
    <>
    
    <View style={addmarkStyle.maincontainer}>
      <View style={addmarkStyle.subcontainer}>
      <SelectDropdown defaultButtonText="select admission number"
                        data={students}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem)
                            setName(selectedItem)
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


        <TextInput
          style={addmarkStyle.input}
          placeholder="Enter student overall attendance"
          value={attendace}
          onChangeText={(value) => setAttendance(value)}
        />
                <TextInput
          style={addmarkStyle.input}
          placeholder="Enter semester"
          value={semester}
          onChangeText={(value) => setSemester(value)}
        />

        <Button title="Upload Attendance" onPress={uploadHandler} color="#007BFF" />
        <TouchableOpacity style={addmarkStyle.button} onPress={editHandler} >
          <Text style={addmarkStyle.buttontext} >EDIT/DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
    {open?
    <Dialog setOpen={setOpen} querytype={"attendance"} students={students} /> :<></>  
    }
    </>
  );
}
