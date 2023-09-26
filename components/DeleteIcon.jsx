import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const DeleteIcon = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 5, width: 34 }}
    >
      <Feather name="trash-2" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default DeleteIcon;
