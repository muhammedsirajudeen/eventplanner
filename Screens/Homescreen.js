import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import UserContext from "../Context";
import homeStyle from "../Stylesheet/homeStyle";
import { Link } from '@react-navigation/native';

export default function Homescreen({ navigation }) {
    const url = useContext(UserContext)
    const [userobject, setUserobject] = useState({ username: undefined, password: undefined })
    
    useEffect(() => {
        async function tokenverifier() {
            let token = await AsyncStorage.getItem('token')
            let response = await axios.post(url + "/verifytoken", {
                token: token
            })
            console.log(response.data.decoded)
            if (response.data.message === "success") {
                setUserobject(response.data.decoded)
            } else {
                navigation.navigate('Login')
            }
        }
        tokenverifier()
    }, [])

    return (
        <View style={homeStyle.maincontainer} >
            <View style={homeStyle.navigationcontainer}>
                <Text style={homeStyle.usertext}> Welcome, {userobject.username} </Text>
                <Link to={{ screen: 'Profile' }}>Profile</Link>
                <Link to={{ screen: 'Event' }}>Event</Link>
                <Link to={{ screen: 'Notice' }}>Notice</Link>
            </View>

            <Text style={homeStyle.collegeheading} >Welcome to {userobject.college}</Text>
            <Text style={homeStyle.collegesubheading}>Explore more about your course{userobject.course}</Text>
            <ScrollView contentContainerStyle={homeStyle.contentContainer}>
                <Text style={homeStyle.title}>Upcoming Events</Text>
                <View style={homeStyle.eventContainer}>
                    <Image source={require('../assets/event.webp')} style={homeStyle.eventImage} />
                    <View style={homeStyle.eventDetails}>
                        <Text style={homeStyle.eventTitle}>Annual College Fest</Text>
                        <Text style={homeStyle.eventDate}>March 25th, 2024</Text>
                        <Text style={homeStyle.eventDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor rhoncus nulla.</Text>
                    </View>
                </View>
                <View style={homeStyle.eventContainer}>
                    <Image source={require('../assets/event.webp')} style={homeStyle.eventImage} />
                    <View style={homeStyle.eventDetails}>
                        <Text style={homeStyle.eventTitle}>Careers Fair</Text>
                        <Text style={homeStyle.eventDate}>April 10th, 2024</Text>
                        <Text style={homeStyle.eventDescription}>Sed euismod augue nec ultrices tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
