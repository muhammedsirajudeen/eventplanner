import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import addmarkStyle from "../Stylesheet/addmarkStyle";

export default function AddMarkscreen() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  function uploadHandler() {
    // Data upload to server logic here
  }

  return (
    <View style={addmarkStyle.maincontainer}>
      <View style={addmarkStyle.subcontainer}>
        <TextInput
          style={addmarkStyle.input}
          placeholder="Enter student name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={addmarkStyle.input}
          placeholder="Enter student overall grade"
          value={grade}
          onChangeText={(value) => setGrade(value)}
        />
        <Button title="Upload Mark" onPress={uploadHandler} color="#007BFF" />
      </View>
    </View>
  );
}
