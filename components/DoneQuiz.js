import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InteractiveButton from "./InteractiveButton";
import Title from "./Title";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";
import { black, white, green, gray } from "../utils/colors";

const DoneQuiz = ({ quiz, points, resetQuiz, goBack }) => {
  // Once a quiz is finished, remove the notification for this day and set one for tomorrow
  clearLocalNotification().then(setLocalNotification);

  const renderScore = () => {
    return quiz.length !== 0 ? `${points} out of ${quiz.length}` : "0";
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Complete!</Text>
      <Text style={styles.text}>{`Your score is: ${renderScore()}`} </Text>
      <InteractiveButton
        style={{ flex: 1 }}
        text={"Restart Quiz"}
        interaction={resetQuiz}
        primaryColor={green}
        secondaryColor={white}
      />
      <InteractiveButton
        style={{ flex: 1 }}
        text={"Back to Deck"}
        interaction={goBack}
        primaryColor={gray}
        secondaryColor={white}
      />
    </View>
  );
};

export default DoneQuiz;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "200"
  }
});
