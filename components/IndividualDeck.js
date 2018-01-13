import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Title from "./Title";
import InteractiveButton from "./InteractiveButton";
import { white, black } from "../utils/colors";
import { capitalizer } from "../utils/helpers";

class IndividualDeck extends Component {
  _goBack = () => {
    this.props.navigation.goBack("Decks");
  };

  toAddCard = title => {
    this.props.navigation.navigate("AddCard", { title });
  };

  toQuiz = questions => {
    this.props.navigation.navigate("Quiz", { questions });
  };

  render() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;
    const questions = decks[title];
    const numberOfQuestions = questions.length;
    return (
      <View>
        <Title title={title} numberOfQuestions={numberOfQuestions} />
        <InteractiveButton
          text={"Create New Question"}
          interaction={() => this.toAddCard(title)}
          primaryColor={black}
          secondaryColor={white}
        />
        <InteractiveButton
          text={
            questions && numberOfQuestions > 0
              ? "Start Quiz"
              : "Please Add a Question"
          }
          interaction={() => this.toQuiz(questions)}
          primaryColor={black}
          secondaryColor={white}
          disable={questions === undefined || numberOfQuestions === 0}
        />
      </View>
    );
  }
}

export default connect(state => ({ decks: state.decks }), null)(IndividualDeck);
