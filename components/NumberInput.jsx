import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import {labelsLeftStyles} from "../styles/styles";

const NumberInput = ({ label, style, onChangeText }) => {
  const [number, setNumber] = useState("");

  // Function to handle text input change and validate it as a number
  const handleNumberChange = (text) => {
    if (!isNaN(text)) {
      setNumber(text);
      onChangeText(text);
    }
  };

  return (
    <View>
      <Text style={labelsLeftStyles.header}>{label}</Text>
      <TextInput
        value={number}
        onChangeText={handleNumberChange}
        keyboardType="numeric"
        style={style}
      />
    </View>
  );
};

export default NumberInput;
