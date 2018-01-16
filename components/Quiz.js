import React, { Component } from "react";
import { View, Text } from "react-native";
import Answers from "./Answers";
import PreparingQuiz from "./PreparingQuiz";
import Session from "./Session";
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
  };

  resetQuiz = () => {
    this.setState({
      points: 0,
      quiz: buildQuiz(this.props.navigation.state.params.questions),
      position: 0
    });
  };

  _goBack = () => {
    const { title } = this.props.navigation.state.params;
    this.props.navigation.navigate("IndividualDeck", { title });
  };

  render() {
    const { quiz, position, points } = this.state;
    const { title } = this.props.navigation.state.params;
    return quiz.length === 0 ? (
      <PreparingQuiz style={{ flex: 1 }} />
    ) : (
      <Session
        style={{ flex: 1, alignItems: "center" }}
        title={title}
        quiz={quiz}
        position={position}
        points={points}
        resetQuiz={this.resetQuiz}
        addPoint={this.addPoint}
        nextQuestion={this.nextQuestion}
        goBack={this._goBack}
      />
    );
  }
}

export default Quiz;
