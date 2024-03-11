import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import admindataStyle from "../Stylesheet/admindataStyle";
import UserContext from "../Context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddEventscreen({ navigation }) {
  const [eventname, setEventname] = useState();
  const [eventdate, setEventdate] = useState();
  const [collegename, setCollegename] = useState();
  const [description, setDescription] = useState();
  const [events, setEvents] = useState([]);
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

        let eventresponse = await axios.post(url + "/event/getevent", {
          token: token,
        });
        setEvents(eventresponse.data.eventarray);
      } else {
        navigation.navigate("Admin");
      }
    }
    getToken();
  }, []);

  async function addeventHandler() {
    let token = await AsyncStorage.getItem("token");
    let response = await axios.post(url + "/event/addevent", {
      eventname: eventname,
      eventdate: eventdate,
      eventdescription: description,
      token: token,
    });
    if (response.data.message === "success") {
      setEventdate("");
      setEventname("");
      setDescription("");
      Alert.alert("Added successfully");
      let eventresponse = await axios.post(url + "/event/getevent", {
        token: token,
      });
      setEvents(eventresponse.data.eventarray);
    } else {
      Alert.alert("Please re-add the data");
    }
  }

  async function deleteHandler(id) {
    let response = await axios.delete(url + `/event/popevent/${id}`);
    if (response.data.message === "success") {
      setEvents(events.filter((event) => event._id !== id));
    }
  }

  return (
    <ScrollView>
      <View style={admindataStyle.maincontainer}>
        <View style={admindataStyle.navigationcontainer}>
          <Text style={admindataStyle.collegename}>{collegename}</Text>
        </View>

        <View style={admindataStyle.subcontainer}>
          <Text style={admindataStyle.heading}>ADD EVENT</Text>
          <TextInput
            style={admindataStyle.input}
            placeholder="Event name"
            value={eventname}
            onChangeText={(value) => setEventname(value)}
          />
          <Text style={admindataStyle.dateheading}>Please follow dd-mm-yyyy format</Text>
          <TextInput
            style={admindataStyle.input}
            placeholder="Event date"
            value={eventdate}
            onChangeText={(value) => setEventdate(value)}
          />
          <TextInput
            style={admindataStyle.input}
            placeholder="Event description"
            value={description}
            onChangeText={(value) => setDescription(value)}
          />

          <TouchableOpacity style={admindataStyle.button} onPress={addeventHandler}>
            <Text style={admindataStyle.buttonText}>Add Event</Text>
          </TouchableOpacity>
        </View>

        <View style={admindataStyle.eventContainer}>
          {events.map((event) => {
            return (
              <View style={admindataStyle.eventSubContainer} key={event._id}>
                <Text style={admindataStyle.eventText}>{event.eventname}</Text>
                <Text style={admindataStyle.eventText}>{event.eventdate}</Text>
                <TouchableOpacity style={admindataStyle.deleteButton} onPress={() => deleteHandler(event._id)}>
                  <Text style={admindataStyle.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
