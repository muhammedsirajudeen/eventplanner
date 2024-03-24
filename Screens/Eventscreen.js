import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import axios from "axios";
import UserContext from "../Context";
import eventStyle from "../Stylesheet/eventStyle";

export default function EventScreen() {
  const url = useContext(UserContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get(url + "/grade/event");
        if (response.data.message === "success") {
          setEvents(response.data.event);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getEvents();
  }, []);

  return (
    <ScrollView contentContainerStyle={eventStyle.maincontainer}>
      <Text style={eventStyle.eventtext}>EVENTS IN YOUR COLLEGE</Text>
      <View style={eventStyle.eventContainer}>
        {events.map((event) => (
          <View style={eventStyle.eventSubContainer} key={event._id}>
            <Image
              source={require("../assets/event.webp")}
              style={eventStyle.eventImage}
              resizeMode="cover"
            />
            <Text style={eventStyle.eventText}>{event.eventname}</Text>
            <Text style={eventStyle.eventText}>{event.eventdate}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
