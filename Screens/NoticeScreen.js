import { useEffect,useContext, useState } from "react"
import { View,Text, ScrollView } from "react-native"
import UserContext from "../Context"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
import profileStyle from "../Stylesheet/profileStyle";
export default function NoticeScreen(){

    const url = useContext(UserContext)
    const [notice,setNotice]=useState([])
    useEffect(()=>{
        async function getProfile(){
            let response=(await axios.get(url+"/grade/notice")).data
            console.log(response)
            setNotice(response.notice)
        }
        getProfile()
    },[])  
    return(
        <ScrollView contentContainerStyle={profileStyle.maincontainer} >
            
            <View style={profileStyle.noticecontainer}>
                {notice.map((notice)=>{
                    return(
                        <View style={profileStyle.notice} KEY={notice.id} >
                            <Text style={profileStyle.noticetext}>{notice.notice}</Text>
                        </View>
                    )
                })}
            </View>

        </ScrollView>
    )
}