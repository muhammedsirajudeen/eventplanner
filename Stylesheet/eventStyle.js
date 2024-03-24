import { StyleSheet } from "react-native";

const eventStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  eventtext: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  eventContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  eventSubContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  eventImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  eventText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default eventStyle;
