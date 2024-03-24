import { useEffect,useContext, useState } from "react"
import { View,Text, ScrollView,Image } from "react-native"
import UserContext from "../Context"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import profileStyle from "../Stylesheet/profileStyle";
export default function Profilescreen(){

    const url = useContext(UserContext)
    const [profile,setProfile]=useState("")
    const [grades,setGrades]=useState([])
    const [attendance,setAttendance]=useState([])
    useEffect(()=>{
        async function getProfile(){
            console.log("hit")
            let token=await AsyncStorage.getItem('token')
            console.log(token)
            let response=(await axios.post(url+"/grade/details",{
                token:token
                }
              )).data
              console.log("the response is ")
            console.log(response)
            setProfile(response.profile)
            setGrades(response.grade)
            setAttendance(response.attendance)
        }
        getProfile()
    },[])  
    return(
        <ScrollView contentContainerStyle={profileStyle.maincontainer} >
            <Text style={profileStyle.heading} >Profile</Text>

            <View style={profileStyle.profilecontainer}>
                <Image style={profileStyle.profileimage} source={require("../assets/person.png")} ></Image>
                <Text style={profileStyle.profiletext}>{profile?.username}</Text>
                <Text style={profileStyle.profiletextsub}>{profile?.college}</Text>

                <Text style={profileStyle.profiletext}>{profile?.course}</Text>

            </View>
            <Text style={profileStyle.heading}>GRADE</Text>

            <View style={profileStyle.profilecontainer}>

                {
                    grades.map((grade)=>{
                        return(
                            <View style={profileStyle.gradecontainer} key={grade._id} >
                                <Text style={profileStyle.profiletextsub}> SEMESTER {grade.semester}</Text>
                                <Text style={profileStyle.profiletextsub}> GRADE {grade.grade}</Text>

                            </View>
                        )
                    })


                }
            </View>
 
            <Text style={profileStyle.heading}>ATTENDANCE</Text>
            <View style={profileStyle.profilecontainer}>
            {
                    attendance.map((attendance)=>{
                        return(
                            <View style={profileStyle.gradecontainer} key={attendance._id} >
                                <Text style={profileStyle.profiletextsub}> SEMESTER {attendance.semester}</Text>
                                <Text style={profileStyle.profiletextsub}> ATTENDANCE {attendance.attendance}</Text>

                            </View>
                        )
                    })


                }

            </View>

        </ScrollView>
    )
}