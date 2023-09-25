import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/labelsSpentStyles";
import inputStyles from "../styles/inputStyles";
import Picker from "./Picker";
import NumberInput from "./NumberInput";

const DefectInput = ({ sizes, onValueChange }) => {
  const [size, setSize] = useState(sizes[0].value);
  const [labelsQuantity, setLabelsQuantity] = useState(0);

  return (
    <View>
      <View style={{}}>
        <Picker
          options={sizes}
          onValueChange={(optionId) => {
            const sizeValue = sizes.find(size => size.id === optionId).value;
            setSize(sizeValue);
            onValueChange(sizeValue, labelsQuantity);
          }}
        />
      </View>
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
