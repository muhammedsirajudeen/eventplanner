import { View,Text,TouchableOpacity,Image,StyleSheet, Button, TextInput, Alert } from "react-native"
import { useEffect, useState, useContext } from "react"
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios"
import UserContext from "../Context";
export default function Dialog({querytype,students,setOpen}){
    const [admissionnumber,setAdmissionnumber]=useState("")
    const url=useContext(UserContext)
    const [semester,setSemester]=useState("")
    const [grade,setGrade]=useState("")
    const semesterarray=["1","2","3","4","5","6"]
    useEffect(()=>{
        console.log("hey")
        if(admissionnumber && semester ){
            let constructedurl=url+"/student/data?querytype="+querytype+"&id="+admissionnumber+"&semester="+semester
            console.log(constructedurl)
            async function getData(){
                let response=(await axios.get(constructedurl)).data
                console.log(response)
                if(response.message==="success"){
                    setGrade(response.grade[querytype])
                }else{
                    Alert.alert("data not found")
                }
            }
            getData()
    
        }else{
            Alert.alert("enter both admission number and semester")
        }
    },[semester])
    function closeHandler(){
        setOpen(false)
    }
    async  function updateHandler(){
        let constructedurl=url+"/student/data?querytype="+querytype
        console.log(constructedurl)
        try{
        let response=(await axios.post(constructedurl,
        {
            admissionnumber:admissionnumber,
            semester:semester,
            grade:grade
        })).data
        console.log(response)  
        if(response.message==="success"){
            Alert.alert("data saved successfully")
        } else{
            Alert.alert(response.message)
        }
    }catch(error){
        console.log(error)
    }
    }
    return(
        <View style={styles.maincontainer} >
            <View style={styles.subcontainer}>
            <SelectDropdown defaultButtonText="select admission number"
                        data={students}
                        onSelect={(selectedItem, index) => {
                            setAdmissionnumber(selectedItem)
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
                <View style={styles.selectcontainer}>
                <SelectDropdown defaultButtonText="select semester"
                        data={semesterarray}
                        onSelect={(selectedItem, index) => {
                            setSemester(selectedItem)
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
                <TextInput placeholder="enter value" style={styles.inputcontainer} value={grade} onChangeText={(text)=>setGrade(text)}  ></TextInput>
                <TouchableOpacity style={styles.button} onPress={updateHandler} >
                    <Text style={styles.buttontext} >update</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={closeHandler} >
                    <Text style={styles.buttontext} >close</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    maincontainer:{
        position:"absolute",
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    subcontainer:{
        height:350,
        width:350,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green"
    },
    button:{
        backgroundColor:"white",
        padding:3,
        margin:10
    },
    inputcontainer:{
        backgroundColor:"white",
        color:"black",
        width:'80%',
        margin:10
    },
    selectcontainer:{
        marginTop:10
    }
})