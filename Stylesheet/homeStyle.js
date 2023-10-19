import { StyleSheet } from "react-native";

const homeStyle=StyleSheet.create(
    {
        maincontainer:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            width:"100%",
            height:"100%",

        },
        navigationcontainer:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center",
            width:"100%",
            height:30
        },
        usertext:{
            fontWeight:'bold'
        }
    }
)
export default homeStyle