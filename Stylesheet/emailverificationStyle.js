import { StyleSheet } from "react-native";

const emailverificationStyle=StyleSheet.create(
    {
        maincontainer:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        logincontainer:{
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            width:400,
            height:400,
        },
        emailtext:{
            fontSize:20,
            fontWeight:"800"
        },
        textinput:{
            borderColor:"black",
            borderWidth:1,
            height:40,
            width:"60%",
            margin:30
        },
        verifybutton:{
            backgroundColor:"black",
            padding:3
        },
        verifytext:{
            color:"white"
        }
    }
)

export default emailverificationStyle