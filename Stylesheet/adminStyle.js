import { StyleSheet } from "react-native";

const adminStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5", // Set a background color
  },
  subcontainer: {
    width: "80%",
    height: 300,
    borderWidth: 1,
    borderColor: "#CCCCCC", // Lighter border color
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF", // White background
    shadowColor: "#000", // Add shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-around", // Adjust space between items
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC", // Lighter border color
    paddingHorizontal: 10,
    marginBottom: 15, // Add some spacing between inputs
  },
  heading: {
    fontWeight: "bold", // Adjust font weight
    fontSize: 24, // Adjust font size
    marginBottom: 20, // Add some spacing between heading and inputs
  },
});

export default adminStyle;
