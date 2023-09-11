import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as React from "react";

const SelectOption = ({ label, options, selectedValue, onValueChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map((option) => (
          <Picker.Item key={option.id} label={option.value} value={option.id} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectOption;
