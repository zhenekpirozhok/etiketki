import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  inputContainer: {
    position: "relative"
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
  icon: {
    position: "absolute",
    right: 10,
    top: "25%",
  },
  pickerItems: {
    maxHeight: 350,
    position: "absolute",
    width: "100%",
    zIndex: 10,
    backgroundColor: "white",
    top: "100%",
    borderRadius: 10,
  },
  pickerItem: {
    paddingVertical: 10,
    paddingLeft: 5,
    borderBottomWidth: 2,
    borderColor: "#eee"
  },
  pickerItemText: {
    fontSize: 18,
  }
});

export default inputStyles;
