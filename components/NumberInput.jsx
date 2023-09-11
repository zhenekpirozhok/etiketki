import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const NumberInput = ({ label, style, onChangeText }) => {
  const [number, setNumber] = useState("");

  // Function to handle text input change and validate it as a number
  const handleNumberChange = (text) => {
    // Check if the input is a valid number using isNaN
    if (!isNaN(text)) {
      setNumber(text);
      onChangeText(text);
    }
  };

  return (
    <View>
      <Text>{label}</Text>
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
