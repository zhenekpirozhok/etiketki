import { StyleSheet } from "react-native";

export const labelsLeftStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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

export const labelsSpentStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF", // Button background color
    borderRadius: 10, // Rounded corners
    padding: 15, // Padding inside the button
    alignItems: "center", // Center text horizontally
    marginBottom: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white", // Text color
    fontWeight: "bold", // Bold text
    fontSize: 16, // Text font size
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F2F2F2", // Background color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 15, // Horizontal padding
  },
  sizeText: {
    flex: 2,
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold", // Bold text
    color: "#333", // Text color
  },
  input: {
    flex: 2,
    backgroundColor: "white",
    borderColor: "#C0C0C0", // Border color
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 5, // Rounded corners
    height: 40, // Input height
  },
  totalText: {
    flex: 2,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF", // Text color
  },
});
