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
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",
            height:50,
            paddingHorizontal: 20,
        },
        usertext:{
            fontWeight:'bold'
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:-80,
            paddingHorizontal: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        eventContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        eventImage: {
            width: 100,
            height: 100,
            marginRight: 10,
            borderRadius: 5,
        },
        eventText: {
            fontSize: 16,
        },
        collegeheading:{
            fontSize:20,
            fontWeight:"500",

        },
        collegesubheading:{
            marginTop:20,
            fontSize:15,
            fontWeight:"500"
        }
    }
)
export default homeStyle;
