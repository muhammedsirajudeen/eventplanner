import { StyleSheet } from "react-native"
const loginStyle=StyleSheet.create(
    {
        maincontainer:{
            display:"flex",
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        },
        logincontainer:{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"column",
            borderColor:"black",
            borderWidth:1,
            borderRadius:10,
            height:400,
            width:"80%",
     
         
        },
        textinput:{
            width:"80%",
            height:40,
            borderColor:"black",
            borderWidth:1

        },
        select:{
            borderWidth:1
        }
    }
)
export default loginStyle
