import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LabelsLeftScreen from "./screens/LabelsLeftScreen";
import LabelsSpentScreen from "./screens/LabelsSpentScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Потрачено") {
              iconName = focused ? "dollar" : "dollar"; // Use the appropriate icon name
            } else if (route.name === "Остаток") {
              iconName = focused ? "list" : "list"; // Use the appropriate icon name
            }

            // Return the icon component
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue", // Color of the active tab icon
          inactiveTintColor: "gray", // Color of inactive tab icons
        }}
      >
        <Tab.Screen name="Потрачено" component={LabelsSpentScreen} />
        <Tab.Screen name="Остаток" component={LabelsLeftScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
