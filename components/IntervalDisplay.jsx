import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IntervalDisplay = ({ size, interval }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Размер бумаги:</Text>
      <Text style={styles.value}>{size}</Text>
      <Text style={styles.label}>Интервал:</Text>
      <Text style={styles.value}>{interval}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
  },
});

export default IntervalDisplay;
