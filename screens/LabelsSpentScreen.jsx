import React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";
import {labelsSpentStyles} from "../styles/styles";
import generatePDF from "../utils/generatePDF";
import { Alert } from 'react-native';

export default function LabelsSpentScreen() {
  const handleButtonPress = () => {
    const htmlContent = `<html><body><h1>Hello, World!</h1></body></html>`;
    generatePDF(htmlContent)
    .then(path => {
      Alert.alert(
        'A pdf was generated',
        `The path do the file is: ${path}`,
        [
          {
            text: 'OK', 
          },
        ],
        { cancelable: false } 
      );
    })
    .catch(err => {
      Alert.alert(
        'Error',
        `An error occured: ${err}`,
        [
          {
            text: 'OK', 
          },
        ],
        { cancelable: false } 
      );
    })
  };

  return (
    <ScrollView style={{ flex: 1, padding: "5%" }}>
      {sizes.map((size) => (
        <SizeInputContainer sizeObj={size} key={size.id} />
      ))}
      <TouchableOpacity style={labelsSpentStyles.button} 
      onPress={handleButtonPress}>
        <Text style={labelsSpentStyles.buttonText}>Конвертировать в pdf</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}
