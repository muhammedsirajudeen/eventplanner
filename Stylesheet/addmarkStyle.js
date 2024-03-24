import { StyleSheet } from "react-native";

const addmarkStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  button:{
    marginTop:10,
    backgroundColor:'green',
    padding:6,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttontext:{
    color:"white",
    fontWeight:"800"
  }
});

export default addmarkStyle;
