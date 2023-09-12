import * as React from "react";
import { Text, View } from "react-native";
import SizeInputContainer from "../components/SizeInput";
import sizes from "../data/sizes";

export default function LabelsSpentScreen() {
  return (
    <View style={{ flex: 1, padding: "5%" }}>
      {
        sizes.map(size => (
            <SizeInputContainer sizeObj={size} key={size.id}/>
        ))
      }
    </View>
  );
}
