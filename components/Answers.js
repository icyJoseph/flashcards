import React, { Component } from "react";
import { View, Text } from "react-native";
import shuffle from "shuffle-array";
import InteractiveButton from "./InteractiveButton";
import { black, blue, white, gray, green, red } from "../utils/colors";

class Answers extends Component {
  state = {
    revealAnswer: false
  };
  componentDidMount() {
    this.setState({ revealAnswer: false });
  }
  toggleAnswer = () => {
    this.setState({ revealAnswer: !this.state.revealAnswer });
  };

  Answer = correct => {
    return (
      <InteractiveButton
        text={correct}
        interaction={this.toggleAnswer}
        primaryColor={green}
        secondaryColor={white}
      />
    );
  };

  randomizedOrderAnswers = randomized => {
    return randomized.map((random, i) => (
      <InteractiveButton
        key={i}
        text={random.answer}
        interaction={random.result}
        primaryColor={black}
        secondaryColor={white}
      />
    ));
  };

  render() {
    const { correct, incorrect, addPoint, passToNext } = this.props;
    const { revealAnswer } = this.state;
    const randomized = shuffle(
      [
        { answer: correct, result: () => addPoint() },
        { answer: incorrect, result: () => passToNext() }
      ],
      { copy: true }
    );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        {revealAnswer
          ? this.Answer(correct)
          : this.randomizedOrderAnswers(randomized)}
        <InteractiveButton
          text={revealAnswer ? "Hide Answer" : "Reveal Answer"}
          interaction={this.toggleAnswer}
          primaryColor={blue}
          secondaryColor={white}
        />
        <InteractiveButton
          text={"Pass"}
          interaction={() => {
            this.setState({ revealAnswer: false });
            passToNext();
          }}
          primaryColor={gray}
          secondaryColor={white}
        />
      </View>
    );
  }
}
export default Answers;
