import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "../styles/labelsSpentStyles";

const SizeInputContainer = ({ sizeObj, onInputChange }) => {
  const [rollsUsed, setRollsUsed] = useState(0);

  const handleNumberChange = (text) => {
    if (!isNaN(text)) {
      setRollsUsed(+text);
      onInputChange(sizeObj.size, sizeObj.labelsQuantity * +text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sizeText}>{sizeObj.size}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleNumberChange}
        placeholder="Рулонов"
      />
      <Text style={styles.totalText}>
        Всего: {sizeObj.labelsQuantity * rollsUsed}
      </Text>
    </View>
  );
};

export default SizeInputContainer;
