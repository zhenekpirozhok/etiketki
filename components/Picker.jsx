import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as React from "react";
import styles from "../styles/inputStyles";
import { Ionicons } from "@expo/vector-icons";

const SelectOption = ({ label, options, selectedValue, onValueChange }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(true);

  const onInputChange = (text) => {
    setInputValue(text);
  };

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(inputValue.toLowerCase())
  );

  React.useEffect(() => {
    const selectedOptionObject = options.find(
      (option) => option.id === selectedValue
    );
    if (selectedValue) {
      setInputValue(selectedOptionObject.value);
    }
  }, [selectedValue]);

  const onItemSelected = (option) => {
    onValueChange(option.id);
    setInputValue(option.value);
    setOpen(false);
  };

  const renderPickerItem = (option) => {
    return (
      <TouchableOpacity
        key={option.id}
        onPress={() => {
          onItemSelected(option);
        }}
        style={styles.pickerItem}
      >
        <Text style={styles.pickerItemText}>{option.value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.header}>{label}</Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onInputChange}
            onPressIn={() => setOpen((open) => !open)}
            value={inputValue}
          />
        </View>
        <Ionicons
          name={"caret-down"} // Use appropriate icon names
          size={24}
          color="#000" // Set your desired icon color
          style={styles.icon}
        />
        {open ? (
          <ScrollView style={styles.pickerItems}>
            {filteredOptions.map(renderPickerItem)}
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
};

export default SelectOption;
