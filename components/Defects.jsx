import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/labelsSpentStyles";
import DefectInput from "./DefectInput";

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
        : defects.map((defect) => (
            <Text key={defect.size}>
              Размер:{" "}
              {sizes.find((sizeObj) => sizeObj.id === defect.size).value},
              кол-во: {defect.quantity}
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
