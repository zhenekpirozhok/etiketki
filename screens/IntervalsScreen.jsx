import { Text, ScrollView } from "react-native";
import textStyles from "../styles/textStyles";
import intervals from "../data/intervals";
import IntervalDisplay from "../components/IntervalDisplay";

export default function IntervalsScreen() {
  return (
    <ScrollView>
      {intervals.map((intervalObj) => (
        <IntervalDisplay
          size={intervalObj.size}
          interval={intervalObj.interval}
          key={intervalObj.id}
        />
      ))}
    </ScrollView>
  );
}
