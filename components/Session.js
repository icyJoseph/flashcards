import React from "react";
import { View, Text } from "react-native";
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
  nextQuestion
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignItems: "flex-start" }}>{`Progression: ${position}/${
        quiz.length
      }`}</Text>
      <View style={{ flex: 1 }}>
        <Title title={capitalizer(title)} />
      </View>
      {position === quiz.length ? (
        <View style={{ flex: 1 }}>
          <DoneQuiz quiz={quiz} points={points} resetQuiz={resetQuiz} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Title title={quiz[position].question} style={{ flex: 2 }} />
          <Answers
            style={{ flex: 4 }}
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
