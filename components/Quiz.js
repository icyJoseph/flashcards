import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import Answers from "./Answers";
import PreparingQuiz from "./PreparingQuiz";
import DoneQuiz from "./DoneQuiz";
import { buildQuiz } from "../utils/helpers";
import { black, white } from "../utils/colors";

class Quiz extends Component {
  state = {
    points: 0,
    position: 0,
    quiz: []
  };

  componentDidMount() {
    this.setState({
      points: 0,
      quiz: buildQuiz(this.props.navigation.state.params.questions)
    });
  }

  nextQuestion = () => {
    this.setState(prevState => ({
      position: prevState.position + 1
    }));
  };

  addPoint = () => {
    this.setState(prevState => ({
      points: prevState.points + 1
    }));
    this.nextQuestion();
  };

  renderQuestion = (quiz, position) => {
    return (
      <View>
        <Text>QUIZ</Text>
        {position === quiz.length ? (
          <DoneQuiz
            quiz={this.state.quiz}
            points={this.state.points}
            resetQuiz={this.resetQuiz}
          />
        ) : (
          <View>
            <Text>Progression: {`${position}/${quiz.length}`}</Text>
            <Text>{quiz[position].question}</Text>
            <Answers
              correct={quiz[position].correct}
              incorrect={quiz[position].incorrect}
              addPoint={this.addPoint}
              passToNext={this.nextQuestion}
            />
            <TouchableOpacity
              style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
              onPress={this.nextQuestion}
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

  resetQuiz = () => {
    this.setState({
      points: 0,
      quiz: buildQuiz(this.props.navigation.state.params.questions),
      position: 0
    });
  };

  render() {
    const { quiz, position } = this.state;
    return quiz.length === 0 ? (
      <PreparingQuiz />
    ) : (
      this.renderQuestion(quiz, position)
    );
  }
}

export default Quiz;

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
