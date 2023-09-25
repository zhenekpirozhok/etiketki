import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "../styles/labelsSpentStyles";
import textStyles from "../styles/textStyles";
import SizeInputContainer from "./SizeInput";
import sizes from "../data/sizes";

const TypeSizeInput = ({ paperType, handleInputChange }) => {
  return (
    <View>
      <Text style={textStyles.header}>{paperType}</Text>
      <View>
        {sizes
          .filter((size) => size.size.includes(paperType.toLowerCase()))
          .map((size) => (
            <SizeInputContainer
              sizeObj={size}
              key={size.id}
              onInputChange={handleInputChange}
            />
          ))}
      </View>
    </View>
  );
};

export default TypeSizeInput;
