import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SizeInputContainer = ({ sizeObj }) => {
  const [rollsUsed, setRollsUsed] = useState(0);

  const handleNumberChange = (text) => {
    if (!isNaN(text)) {
      setRollsUsed(+text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sizeText}>{sizeObj.size}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleNumberChange}
      />
      <Text style={styles.totalText}>
        {sizeObj.labelsQuantity * rollsUsed}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // Adjust as needed
  },
  sizeText: {
    flex: 2, // Adjust as needed
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 1, // Adjust as needed
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  totalText: {
    flex: 2, // Adjust as needed
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SizeInputContainer;

