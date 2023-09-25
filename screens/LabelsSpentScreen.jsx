import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";
import styles from "../styles/labelsSpentStyles";
import textStyles from "../styles/textStyles";
import { generatePDF } from "../utils/generatePDF";
import showError from "../utils/showError";
import Defects from "../components/Defects";
import useLabelsSpent from "../hooks/useLabelsSpent";
import TypeSizeInput from "../components/TypedSizeInput";

export default function LabelsSpentScreen() {
  const { sizeData, defectData, handleInputChange, handleAddDefect } =
    useLabelsSpent();

  const handleButtonPress = () => {
    generatePDF(sizeData, defectData).catch((err) => {
      showError(err);
    });
  };

  return (
    <ScrollView style={{ flex: 1, padding: "5%" }}>
      <TypeSizeInput
        paperType={"Термо"}
        handleInputChange={handleInputChange}
      />
      <TypeSizeInput
        paperType={"Цифра"}
        handleInputChange={handleInputChange}
      />
      <TypeSizeInput
        paperType={"Помарочная"}
        handleInputChange={handleInputChange}
      />
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
