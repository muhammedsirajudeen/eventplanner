import { StyleSheet } from "react-native";

const adminStyle=StyleSheet.create(
    {
        maincontainer:{
            width:"100%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        },
        subcontainer:{
            width:"80%",
            height:300,
            borderWidth:1,
            borderRadius:30,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly"
        },
        input:{
            width:"50%",
            height:40,
            borderWidth:1,
            borderRadius:5
        },
        heading:{
            fontWeight:"900",
            fontSize:30
        }
    }
)
export default adminStyle