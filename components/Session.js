import React from "react";
import { View, Text } from "react-native";
import DoneQuiz from "./DoneQuiz";
import Answers from "./Answers";
import Title from "./Title";
import { black, white } from "../utils/colors";

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
      <Title title={"QUIZ"} />
      {position === quiz.length ? (
        <DoneQuiz quiz={quiz} points={points} resetQuiz={resetQuiz} />
      ) : (
        <View>
          <Title title={`Progression: ${position}/${quiz.length}`} />
          <Title title={quiz[position].question} />
          <Answers
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
