import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import shuffle from "shuffle-array";
import { black, white } from "../utils/colors";

const Answers = ({ correct, incorrect, addPoint, passToNext }) => {
  let randomizedAnswer = shuffle(
    [
      { answer: correct, result: () => addPoint() },
      { answer: incorrect, result: () => passToNext() }
    ],
    { copy: true }
  );
  return (
    <View>
      {randomizedAnswer.map((answer, i) => (
        <TouchableOpacity
          key={i}
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
          onPress={randomizedAnswer[i].result}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            {randomizedAnswer[i].answer}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Answers;

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
