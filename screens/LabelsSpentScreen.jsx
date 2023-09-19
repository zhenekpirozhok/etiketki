import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";
import styles from "../styles/labelsSpentStyles";
import { generatePDF } from "../utils/generatePDF";
import showError from "../utils/showError";

export default function LabelsSpentScreen() {
  const [sizeData, setSizeData] = React.useState([]);

  const handleInputChange = (size, quantity) => {
    const newData = { size, quantity };
    const updatedData = sizeData.map((item) =>
      item.size === size ? newData : item
    );
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }
    setSizeData(updatedData);
  };

  const handleButtonPress = () => {
    generatePDF(sizeData)
      .catch((err) => {
        showError(err);
      });
  };

  return (
    <ScrollView style={{ flex: 1, padding: "5%" }}>
      {sizes.map((size) => (
        <SizeInputContainer sizeObj={size} key={size.id} onInputChange={handleInputChange}/>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Конвертировать в pdf</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
