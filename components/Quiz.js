import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import shuffle from "shuffle-array";
import Answers from "./Answers";
import { black, white } from "../utils/colors";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";

class Quiz extends Component {
  state = {
    points: 0,
    position: 0,
    quiz: []
  };

  componentDidMount() {
    this.setState({
      points: 0,
      quiz: this.buildQuiz(this.props.navigation.state.params.questions)
    });
  }

  buildQuiz = questions => {
    const answers = questions.map(q => q.answer);
    const shuffledAnswers = this.buildShuffledAnswers(answers);
    const quiz = questions.map((q, i) => ({
      question: q.question,
      correct: q.answer,
      incorrect: shuffledAnswers[i]
    }));
    return quiz;
  };

  buildShuffledAnswers = answers => {
    let flag = false;
    let shuffledAnswers;
    while (!flag) {
      shuffledAnswers = shuffle(answers, { copy: true });
      // flag is true if no shuffledAnswer sits in the same index in answers
      flag = shuffledAnswers.filter((s, i) => s === answers[i]).length === 0;
    }
    return shuffledAnswers;
  };

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

  preparingQuiz = () => {
    return (
      <View>
        <Text>Preparing Quiz</Text>
      </View>
    );
  };

  renderQuestion = (quiz, position) => {
    return (
      <View>
        <Text>QUIZ</Text>
        {position === quiz.length ? (
          this.renderDoneWithQuiz()
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

  renderDoneWithQuiz = () => {
    // Once a quiz is finished, remove the notification for this day and set one for tomorrow
    clearLocalNotification().then(setLocalNotification);
    return (
      <View>
        <Text>DONE!</Text>
        <Text>{this.renderScore()}</Text>
        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
          onPress={this.resetQuiz}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderScore = () => {
    return this.state.quiz.length !== 0
      ? `${this.state.points} out of ${this.state.quiz.length}`
      : "0";
  };

  resetQuiz = () => {
    this.setState({
      points: 0,
      quiz: this.buildQuiz(this.props.navigation.state.params.questions),
      position: 0
    });
  };

  render() {
    const { quiz, position } = this.state;
    return quiz.length === 0
      ? this.preparingQuiz()
      : this.renderQuestion(quiz, position);
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
