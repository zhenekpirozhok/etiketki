import { StyleSheet } from "react-native";

export const labelsLeftStyles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  labelText: {
    fontSize: 16,
    marginTop: 8,
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
