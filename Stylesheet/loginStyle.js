import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  logincontainer: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textinput: {
    width: "100%",
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10, // Add margin between inputs
    paddingHorizontal: 10,
    margin:30
  },
  select: {
    width: "100%",
    height: "auto",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10, // Add margin between inputs
    paddingHorizontal: 10,
    margin:30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    marginTop:30
  }
});

export default loginStyle;
