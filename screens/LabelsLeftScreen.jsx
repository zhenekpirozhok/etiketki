import React from "react";
import { Text, View } from "react-native";
import Picker from "../components/Picker";
import NumberInput from "../components/NumberInput";
import radiuses from "../data/radiuses";
import useLabelsLeft from "../hooks/useLabelsLeft";
import styles from "../styles/labelsLeftStyles";

export default function LabelsLeftScreen() {
  const { labelsLeft, selectedSize, currentRadius, updateLabelsLeft } =
    useLabelsLeft(radiuses);

  return (
    <View style={styles.container}>
      <Picker
        label={"Размер бумаги"}
        options={radiuses}
        selectedValue={selectedSize}
        onValueChange={(optionObj) => {
          updateLabelsLeft(optionObj, currentRadius);
        }}
      />
      <NumberInput
        label={"Текущий радиус"}
        style={styles.input}
        onChangeText={(text) => {
          updateLabelsLeft(selectedSize, text);
        }}
      />
      <Text style={styles.labelText}>Этикеток осталось: {labelsLeft}</Text>
    </View>
  );
}