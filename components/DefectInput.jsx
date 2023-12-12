import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/labelsSpentStyles";
import textStyles from "../styles/textStyles";
import inputStyles from "../styles/inputStyles";
import NumberInput from "./NumberInput";

const DefectInput = ({ onValueChange }) => {
  const [size, setSize] = useState("");
  const [labelsQuantity, setLabelsQuantity] = useState(0);

  return (
    <View>
      <Text style={textStyles.labelText}>Размер бумаги</Text>
      <View style={inputStyles.inputContainer}>
        <TextInput
          style={inputStyles.input}
          onChangeText={(text) => {
            setSize(text);
            onValueChange(text, labelsQuantity);
          }}
        />
      </View>
      <Text style={textStyles.labelText}>Кол-во браков</Text>
      <View style={inputStyles.inputContainer}>
        <NumberInput
          style={inputStyles.input}
          onChangeText={(text) => {
            setLabelsQuantity(+text);
            onValueChange(size, +text);
          }}
        />
      </View>
    </View>
  );
};

export default DefectInput;
