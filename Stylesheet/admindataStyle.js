import { StyleSheet } from "react-native";

const admindataStyle=StyleSheet.create(
    {
        maincontainer:{
            display:"flex",
            justifyContent:"center"
            ,alignItems:"center",
            width:"100%",
            height:"100%"

        },
        subcontainer:{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-evenly",
            width:"80%",
            height:400,
            borderWidth:1,
            borderRadius:10
        },
        heading:{
            fontWeight:"900",
            fontSize:30
        },
        input:{
            width:"60%",
            height:40,
            borderWidth:1
        }
    }
)
export default admindataStyle