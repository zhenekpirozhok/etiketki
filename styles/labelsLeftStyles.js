import { StyleSheet } from "react-native";

const labelsLeftStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "#ffffff", // Цвет фона пикера в открытом состоянии
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
    color: "#333", // Цвет текста в открытом состоянии
    placeholderTextColor: "#999", // Цвет текста в закрытом состоянии
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
  },
  labelText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default labelsLeftStyles;