import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";
import styles from "../styles/labelsSpentStyles";
import textStyles from "../styles/textStyles";
import { generatePDF } from "../utils/generatePDF";
import showError from "../utils/showError";
import DefectInput from "../components/DefectInput";
import Defects from "../components/Defects";

export default function LabelsSpentScreen() {
  const [sizeData, setSizeData] = React.useState([]);
  const [defectData, setDefectData] = React.useState([]);

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
    generatePDF(sizeData, defectData).catch((err) => {
      showError(err);
    });
  };

  const handleAddDefect = (size, quantity) => {
    const newData = { size, quantity };
    const updatedData = defectData.map((item) =>
      item.size === size ? newData : item
    );
    if (!updatedData.some((item) => item.size === size)) {
      updatedData.push(newData);
    }
    setDefectData(updatedData);
  };

  return (
    <ScrollView style={{ flex: 1, padding: "5%" }}>
      <Text style={textStyles.header}>Термо</Text>
      {sizes
        .filter((size) => size.size.includes("термо"))
        .map((size) => (
          <SizeInputContainer
            sizeObj={size}
            key={size.id}
            onInputChange={handleInputChange}
          />
        ))}
      <Text style={textStyles.header}>Цифра</Text>
      {sizes
        .filter((size) => size.size.includes("цифра"))
        .map((size) => (
          <SizeInputContainer
            sizeObj={size}
            key={size.id}
            onInputChange={handleInputChange}
          />
        ))}
      <Text style={textStyles.header}>Помарочная</Text>
      {sizes
        .filter((size) => size.size.includes("помарочная"))
        .map((size) => (
          <SizeInputContainer
            sizeObj={size}
            key={size.id}
            onInputChange={handleInputChange}
          />
        ))}
      <View style={{ minHeight: 400 }}>
        <Text style={textStyles.header}>Браки</Text>
        <Defects
          sizes={sizes.map((size) => ({ id: size.id, value: size.size }))}
          defects={defectData}
          onAddDefect={handleAddDefect}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Конвертировать в pdf</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
