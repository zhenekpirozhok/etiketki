import React from "react";
import { Text, View } from "react-native";
import Picker from "../components/Picker";
import NumberInput from "../components/NumberInput";
import radiuses from "../data/radiuses";
import useLabelsLeft from "../hooks/useLabelsLeft";
import {labelsLeftStyles} from "../styles/styles";

export default function LabelsLeftScreen() {
  const { labelsLeft, selectedSize, currentRadius, updateLabelsLeft } =
    useLabelsLeft(radiuses);

  return (
    <View style={labelsLeftStyles.container}>
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
        style={labelsLeftStyles.input}
        onChangeText={(text) => {
          updateLabelsLeft(selectedSize, text);
        }}
      />
      <Text style={labelsLeftStyles.labelText}>Этикеток осталось: {labelsLeft}</Text>
    </View>
  );
}