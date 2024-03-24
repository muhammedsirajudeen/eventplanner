import { StyleSheet } from "react-native";


let profileStyle=StyleSheet.create(
    {
        maincontainer:{
            // flex:1,
            justifyContent:"start",
            alignItems:"center",
            backgroundColor:"white"
        },
        heading:{
            fontSize:25,
            fontWeight:"500",
            marginTop:15
        },
        profilecontainer:{
            height:300,
            width:300,
            backgroundColor:"green",
            borderRadius:10,
            marginTop:40,
            display:"flex",
            justifyContent:"start",
            alignItems:"center"
        },
        profileimage:{
            height:100,
            width:100,
            backgroundColor:"white",
            borderRadius:1000,
            marginTop:10
        },
        profiletext:{
            color:"white",
            fontSize:20,
            fontWeight:"500",
            margin:10
        },
        profiletextsub:{
            fontSize:15,
            color:"white",
            fontWeight:"500"
        },
        gradecontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center",
            borderColor:"white",
            borderWidth:1,
            width:"100%"
        },
        noticecontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%"
        },
        notice:{
            width:300,
            backgroundColor:"green",
            minHeight:200,
            borderRadius:20,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        noticetext:{
            color:"white",
            fontSize:15,
            fontWeight:"600"
        }

    }
)
export default profileStyle