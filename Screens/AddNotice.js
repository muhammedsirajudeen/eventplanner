import React, { useState,useContext,useEffect } from "react";
import { View, TextInput, Button, Alert,StyleSheet,Text, TouchableOpacity } from "react-native";
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
  const [notices,setNotices]=useState([])
  async function getNotice(){
    let response=(await axios.get(url+"/student/data?querytype=notice")).data
    console.log(response)
    if(response.message==="success"){
      setNotices(response.notice)
    }
  }
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

    getNotice()
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
      getNotice()
    }
  }
  async function deleteHandler(id){
    console.log(id)
    let response=(await axios.delete(url+"/student/data?querytype=notice&id="+id)).data
    console.log(response)
    getNotice()

  }
  async function updateHandler(id){
    // let response=(await axios.post(url+'/student/data?querytype=notice',{
    //   id:id,
    // }))
    //set ways to update at last
    //next we should add faculty login and in admin panel we must have option to add faculty and delete faculty
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
      <View style={styles.noticesubcontainer}>
            {notices.map((notice)=>{
              return(
                <View key={notice._id} style={styles.noticecontainer}  >
                  <Text style={styles.noticetext}  >{notice.notice}</Text>
                  <TouchableOpacity style={styles.delete} onPress={()=>updateHandler(notice._id)} >
                    <Text style={styles.deletetext}>E</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.delete} onPress={()=>deleteHandler(notice._id)} >
                    <Text style={styles.deletetext}>X</Text>
                  </TouchableOpacity>
                </View>
              )
            })}
      </View>
    
    </View>
  );
}
const styles=StyleSheet.create(
  {
      noticesubcontainer:{
          width:"100%",
          display:'flex',
          justifyContent:"center",
          alignItems:'center'
      },noticecontainer:{
        backgroundColor:"grey",
        marginTop:10,
        width:"80%",
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
      },
      noticetext:{
        color:"white",
        margin:2
      },
      delete:{
        backgroundColor:"white",
        margin:5
      }
  }
)