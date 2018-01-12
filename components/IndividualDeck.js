import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
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
    return (
      <View>
        <Text style={{ fontSize: 24, textAlign: "center", color: black }}>
          {capitalizer(title)}
        </Text>
        <InteractiveButton
          text={"Add Card"}
          interaction={() => this.toAddCard(title)}
          primaryColor={black}
          secondaryColor={white}
        />
        <InteractiveButton
          text={
            questions && questions.length > 0
              ? "Start Quiz"
              : "Please Add a Card"
          }
          interaction={() => this.toQuiz(questions)}
          primaryColor={black}
          secondaryColor={white}
          disable={questions === undefined || questions.length === 0}
        />
      </View>
    );
  }
}

export default connect(state => ({ decks: state.decks }), null)(IndividualDeck);
