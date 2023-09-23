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
      <Text style={styles.header}>{"Размер бумаги"}</Text>
      <Picker
        options={radiuses}
        selectedValue={selectedSize}
        onValueChange={(optionObj) => {
          updateLabelsLeft(optionObj, currentRadius);
        }}
      />
      <Text style={styles.header}>{"Текущий радиус"}</Text>
      <NumberInput
        style={styles.input}
        onChangeText={(text) => {
          updateLabelsLeft(selectedSize, text);
        }}
      />
      <Text style={styles.labelText}>Этикеток осталось: {labelsLeft}</Text>
    </View>
  );
}