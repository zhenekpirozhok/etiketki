import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";
import { labelsSpentStyles } from "../styles/styles";
import { generatePDF } from "../utils/generatePDF";
import { Alert } from "react-native";

export default function LabelsSpentScreen() {
  const [sizeData, setSizeData] = React.useState([]);

  const handleInputChange = (size, quantity) => {
    // Create a new object with the paper size and quantity
    const newData = { size, quantity };

    // Check if this paper size already exists in the state, and update it if it does
    const updatedData = sizeData.map((item) =>
      item.size === size ? newData : item
    );

    // If the paper size doesn't exist, add it to the state
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }

    // Update the state with the new data
    setSizeData(updatedData);
  };

  const handleButtonPress = () => {
    generatePDF(sizeData)
      .catch((err) => {
        Alert.alert(
          "Error",
          `An error occured: ${err}`,
          [
            {
              text: "OK",
            },
          ],
          { cancelable: false }
        );
      });
  };

  return (
    <ScrollView style={{ flex: 1, padding: "5%" }}>
      {sizes.map((size) => (
        <SizeInputContainer sizeObj={size} key={size.id} onInputChange={handleInputChange}/>
      ))}
      <TouchableOpacity
        style={labelsSpentStyles.button}
        onPress={handleButtonPress}
      >
        <Text style={labelsSpentStyles.buttonText}>Конвертировать в pdf</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
