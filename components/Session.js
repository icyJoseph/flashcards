import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DoneQuiz from "./DoneQuiz";
import Answers from "./Answers";
import Title from "./Title";
import { black, white } from "../utils/colors";
import { capitalizer } from "../utils/helpers";

const Session = ({
  title,
  quiz,
  position,
  points,
  resetQuiz,
  addPoint,
  nextQuestion,
  goBack
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{ flex: 1, alignItems: "flex-start" }}
      >{`Progression: ${position}/${quiz.length}`}</Text>
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Text style={styles.text}>{capitalizer(title)}</Text>
      </View>
      {position === quiz.length ? (
        <View style={{ flex: 8 }}>
          <DoneQuiz
            quiz={quiz}
            points={points}
            resetQuiz={resetQuiz}
            goBack={goBack}
          />
        </View>
      ) : (
        <View style={{ flex: 8, alignItems: "center" }}>
          <Text style={styles.text}>{quiz[position].question}</Text>
          <Answers
            style={{ flex: 2 }}
            correct={quiz[position].correct}
            incorrect={quiz[position].incorrect}
            addPoint={addPoint}
            passToNext={nextQuestion}
          />
        </View>
      )}
    </View>
  );
};

export default Session;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "200"
  }
});
