import Picker from "../components/Picker";
import NumberInput from "../components/NumberInput";
import radiuses from "../data/radiuses";
import useLabelsLeft from "../hooks/useLabelsLeft";
import { Text, View } from "react-native";

export default function LabelsLeftScreen() {
  const { labelsLeft, selectedSize, currentRadius, updateLabelsLeft } =
    useLabelsLeft(radiuses);

  return (
    <View style={{ padding: "5%" }}>
      <Picker
        label={"Размер бумаги"}
        options={radiuses}
        selectedValue={selectedSize}
        onValueChange={(optionObj) => {
          updateLabelsLeft(optionObj, currentRadius);
        }}
      />
      <NumberInput
        label={"Текущий радиус"}
        style={{ backgroundColor: "white", margin: "3vh 0" }}
        onChangeText={(text) => {
          updateLabelsLeft(selectedSize, text);
        }}
      />
      <Text>Этикеток осталось: {labelsLeft}</Text>
    </View>
  );
}
