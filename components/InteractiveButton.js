import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";

const InteractiveButton = ({
  text,
  interaction,
  primaryColor,
  secondaryColor,
  disable,
  width
}) => {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios"
          ? [
              styles.iosBtn,
              {
                backgroundColor: secondaryColor,
                borderColor: primaryColor,
                width: width || 300
              }
            ]
          : [
              styles.androidBtn,
              { backgroundColor: primaryColor, width: width || 300 }
            ]
      }
      onPress={interaction}
      disabled={disable === undefined ? false : disable}
    >
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: Platform.OS === "ios" ? primaryColor : secondaryColor
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default InteractiveButton;

const styles = StyleSheet.create({
  iosBtn: {
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidBtn: {
    margin: 5,
    padding: 10,
    borderRadius: 2
  }
});
