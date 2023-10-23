import { StyleSheet } from "react-native"

const addmarkStyle=StyleSheet.create(
    {
        maincontainer:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            height:"100%"
        },
        subcontainer:{
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            width:"80%",
            minHeight:400,
            borderWidth:1,
            borderRadius:30

        },
        input:{
            height:40,
            width:"60%",
            borderWidth:1
        }

    }
)
export default addmarkStyle