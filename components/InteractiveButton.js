import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import { white, black } from "../utils/colors";

const InteractiveButton = ({ text, interaction }) => {
  return (
    <TouchableOpacity
      style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
      onPress={interaction}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default InteractiveButton;

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: white,
    borderColor: black,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidBtn: {
    margin: 5,
    backgroundColor: black,
    padding: 10,
    borderRadius: 2
  }
});
