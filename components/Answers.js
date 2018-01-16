import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import InteractiveButton from "./InteractiveButton";
import { capitalizer } from "../utils/helpers";
import { black, blue, white, gray, green, red } from "../utils/colors";

class Answers extends Component {
  state = {
    revealAnswer: false,
    solved: false,
    rightAnswer: false
  };
  componentDidMount() {
    this.setState({ revealAnswer: false });
  }

  toggleAnswer = () => {
    this.setState({ revealAnswer: !this.state.revealAnswer });
  };

  Answer = correct => {
    return (
      <Text style={[styles.text, { color: green }]}>
        {capitalizer(correct)}
      </Text>
    );
  };

  randomAnswer = randomized => {
    return <Text style={styles.text}>{randomized[0].answer}</Text>;
  };

  verifyAnswer = (label, randomized) => {
    const { correct } = this.props;
    const randomAnswer = randomized[0].answer;
    let rightAnswer;
    if (randomAnswer === correct) {
      rightAnswer = label === "Correct";
    } else if (randomAnswer !== correct) {
      rightAnswer = label === "Incorrect";
    }
    if (rightAnswer) {
      this.props.addPoint();
    }
    this.setState({ solved: true, rightAnswer: rightAnswer });
  };

  answeringButtons = randomized => {
    const labels = ["Correct", "Incorrect"];
    return labels.map((label, i) => (
      <InteractiveButton
        key={i}
        text={label}
        interaction={() => this.verifyAnswer(label, randomized)}
        primaryColor={label === "Correct" ? green : red}
        secondaryColor={white}
      />
    ));
  };

  correct = () => {
    return <Text style={[styles.text, { color: green }]}>Right! 👍</Text>;
  };

  incorrect = () => {
    return <Text style={[styles.text, { color: red }]}>Wrong! 👎</Text>;
  };

  showResult = () => {
    return this.state.rightAnswer ? this.correct() : this.incorrect();
  };

  render() {
    const { randomized, correct, passToNext, end } = this.props;
    const { revealAnswer, solved } = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          {revealAnswer ? this.Answer(correct) : this.randomAnswer(randomized)}
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          {!revealAnswer && !solved
            ? this.answeringButtons(randomized)
            : solved && this.showResult()}
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          {!solved && (
            <InteractiveButton
              text={revealAnswer ? "Hide Answer" : "Show Answer"}
              interaction={this.toggleAnswer}
              primaryColor={blue}
              secondaryColor={white}
            />
          )}
          <InteractiveButton
            text={end && solved ? "Finish" : "Next/Pass"}
            interaction={() => {
              this.setState({
                revealAnswer: false,
                rightAnswer: false,
                solved: false
              });
              passToNext();
            }}
            primaryColor={gray}
            secondaryColor={white}
          />
        </View>
      </View>
    );
  }
}
export default Answers;

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    fontSize: 24,
    fontWeight: "200"
  }
});
