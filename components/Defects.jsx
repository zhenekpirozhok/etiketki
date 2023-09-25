import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/labelsSpentStyles";
import DefectInput from "./DefectInput";
import textStyles from "../styles/textStyles";

const Defects = ({ sizes, defects, onAddDefect }) => {
  const [currentDefect, setCurrentDefect] = useState(null);

  return (
    <View>
      <DefectInput
        sizes={sizes}
        onValueChange={(size, quantity) => {
          setCurrentDefect({ size, quantity });
        }}
      />
      {defects.length === 0
        ? null
        : defects.map((defect, index) => (
            <Text key={index} style={textStyles.labelText}>
              Размер:{defect.size}, кол-во: {defect.quantity}
            </Text>
          ))}
      <Button
        onPress={() => onAddDefect(currentDefect.size, currentDefect.quantity)}
        title="Добавить брак"
        style={styles.button}
      />
    </View>
  );
};

export default Defects;
