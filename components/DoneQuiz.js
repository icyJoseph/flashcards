import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";
import { black, white } from "../utils/colors";

const DoneQuiz = ({ quiz, points, resetQuiz }) => {
  // Once a quiz is finished, remove the notification for this day and set one for tomorrow
  clearLocalNotification().then(setLocalNotification);

  const renderScore = () => {
    return quiz.length !== 0 ? `${points} out of ${quiz.length}` : "0";
  };

  return (
    <View>
      <Text>DONE!</Text>
      <Text>{renderScore()}</Text>
      <TouchableOpacity
        style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
        onPress={resetQuiz}
      >
        <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneQuiz;

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
