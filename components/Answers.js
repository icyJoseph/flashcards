import React from "react";
import { View, Text } from "react-native";
import shuffle from "shuffle-array";
import InteractiveButton from "./InteractiveButton";
import { black, white } from "../utils/colors";

const Answers = ({ correct, incorrect, addPoint, passToNext }) => {
  let randomized = shuffle(
    [
      { answer: correct, result: () => addPoint() },
      { answer: incorrect, result: () => passToNext() }
    ],
    { copy: true }
  );
  return (
    <View>
      {randomized.map((random, i) => (
        <InteractiveButton
          key={i}
          text={random.answer}
          interaction={random.result}
          primaryColor={black}
          secondaryColor={white}
        />
      ))}
    </View>
  );
};

export default Answers;
