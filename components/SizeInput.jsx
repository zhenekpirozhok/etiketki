import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {labelsSpentStyles} from "../styles/styles";

const SizeInputContainer = ({ sizeObj }) => {
  const [rollsUsed, setRollsUsed] = useState(0);

  const handleNumberChange = (text) => {
    if (!isNaN(text)) {
      setRollsUsed(+text);
    }
  };

  return (
    <View style={labelsSpentStyles.container}>
      <Text style={labelsSpentStyles.sizeText}>{sizeObj.size}</Text>
      <TextInput
        style={labelsSpentStyles.input}
        keyboardType="numeric"
        onChangeText={handleNumberChange}
        placeholder="Рулонов"
      />
      <Text style={labelsSpentStyles.totalText}>
        Всего: {sizeObj.labelsQuantity * rollsUsed}
      </Text>
    </View>
  );
};

export default SizeInputContainer;
