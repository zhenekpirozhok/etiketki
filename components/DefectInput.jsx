import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/labelsSpentStyles";
import inputStyles from "../styles/inputStyles";
import Picker from "./Picker";
import NumberInput from "./NumberInput";

const DefectInput = ({ sizes, onValueChange }) => {
  const [sizeId, setSizeId] = useState("0");
  const [labelsQuantity, setLabelsQuantity] = useState(0);

  return (
    <View>
      <View style={{}}>
        <Picker
          options={sizes}
          onValueChange={(optionId) => {
            setSizeId(optionId);
            onValueChange(optionId, labelsQuantity);
          }}
        />
      </View>
      <View style={inputStyles.inputContainer}>
        <NumberInput
          style={inputStyles.input}
          onChangeText={(text) => {
            setLabelsQuantity(+text);
            onValueChange(sizeId, +text);
          }}
        />
      </View>
    </View>
  );
};

export default DefectInput;
