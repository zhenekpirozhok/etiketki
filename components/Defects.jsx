import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/labelsSpentStyles";
import DefectInput from "./DefectInput";
import textStyles from "../styles/textStyles";
import DeleteIcon from "./DeleteIcon";

const Defects = ({ sizes, defects, onAddDefect, onDeleteDefect }) => {
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
          <View style={styles.defectContainer}>
            <Text key={index} style={textStyles.text}>
              Размер: {defect.size}, кол-во: {defect.quantity}
            </Text>
            <DeleteIcon onPress={() => onDeleteDefect(defect.id)}/>
          </View>
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
