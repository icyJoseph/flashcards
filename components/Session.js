import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DoneQuiz from "./DoneQuiz";

const Session = ({
  quiz,
  position,
  points,
  resetQuiz,
  addPoint,
  nextQuestion
}) => {
  return (
    <View>
      <Text>QUIZ</Text>
      {position === quiz.length ? (
        <DoneQuiz quiz={quiz} points={points} resetQuiz={resetQuiz} />
      ) : (
        <View>
          <Text>Progression: {`${position}/${quiz.length}`}</Text>
          <Text>{quiz[position].question}</Text>
          <Answers
            correct={quiz[position].correct}
            incorrect={quiz[position].incorrect}
            addPoint={addPoint}
            passToNext={nextQuestion}
          />
          <TouchableOpacity
            style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
            onPress={nextQuestion}
          >
            <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
              Pass
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Session;

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
