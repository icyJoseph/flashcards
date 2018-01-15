import React from "react";
import { View, Text } from "react-native";
import InteractiveButton from "./InteractiveButton";
import Title from "./Title";
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
      <Title title={"DONE"} />
      <Title title={renderScore()} />
      <InteractiveButton
        text={"Retry"}
        interaction={resetQuiz}
        primaryColor={black}
        secondaryColor={white}
      />
    </View>
  );
};

export default DoneQuiz;
