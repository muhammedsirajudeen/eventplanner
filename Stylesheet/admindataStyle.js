import { StyleSheet } from "react-native";

const admindataStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationcontainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  collegename: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
    marginTop: 10,
    textAlign: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
  button: {
    width: 300,
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  eventContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  eventSubContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  eventText: {
    fontSize: 16,
    color: "#333333",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default admindataStyle
