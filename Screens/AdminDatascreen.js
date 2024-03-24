import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AdminDatascreen({ navigation }) {
  const [collegename, setCollegename] = useState();

  const url = useContext(UserContext);

  useEffect(() => {
    async function getToken() {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        let tokenresponse = await axios.post(url + "/verifytoken", {
          role: "admin",
          token: token,
        });
        setCollegename(tokenresponse.data.decoded.college);
      } else {
        navigation.navigate("Admin");
      }
    }
    getToken();
  }, []);

  return (
    <View style={admindataStyle.maincontainer}>
      <View style={admindataStyle.navigationcontainer}>
        <Text style={admindataStyle.collegename}>{collegename}</Text>
        <Text style={admindataStyle.subtitle}>Welcome to the Admin Panel</Text>
      </View>

      <ScrollView contentContainerStyle={admindataStyle.scrollContainer}>

        <TouchableOpacity
          style={[admindataStyle.button, admindataStyle.addAttendanceButton]}
          onPress={() => navigation.navigate("AddAttendance")}
        >
          <Text style={admindataStyle.buttonText}>Add Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[admindataStyle.button, admindataStyle.addMarksButton]}
          onPress={() => navigation.navigate("AddMark")}
        >
          <Text style={admindataStyle.buttonText}>Add Marks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[admindataStyle.button, admindataStyle.addEventButton]}
          onPress={() => navigation.navigate("AddEvent")}
        >
          <Text style={admindataStyle.buttonText}>Add Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[admindataStyle.button, admindataStyle.addNoticeButton]}
          onPress={() => navigation.navigate("AddNotice")}
        >
          <Text style={admindataStyle.buttonText}>Add Notice</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
