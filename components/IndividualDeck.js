import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Title from "./Title";
import InteractiveButton from "./InteractiveButton";
import { white, black } from "../utils/colors";
import { capitalizer } from "../utils/helpers";
import { getAllDecks } from "../actions";

const IndividualDeck = ({ navigation, decks }) => {
  const _goBack = () => {
    navigation.goBack("Decks");
  };

  const toAddCard = title => {
    navigation.navigate("AddCard", { title });
  };

  const toQuiz = questions => {
    navigation.navigate("Quiz", { questions });
  };

  const { title } = navigation.state.params;
  const questions = decks[title] !== undefined ? decks[title].questions : [];
  const numberOfQuestions = questions === undefined ? 0 : questions.length;
  return (
    <View style={{ flex: 1 }}>
      <Title title={title} numberOfQuestions={numberOfQuestions} />
      <View style={styles.button}>
        <InteractiveButton
          text={"Create New Question"}
          interaction={() => toAddCard(title)}
          primaryColor={black}
          secondaryColor={white}
        />
        <InteractiveButton
          text={
            questions && numberOfQuestions > 1
              ? "Start Quiz"
              : "Please Add two or more Questions"
          }
          interaction={() => toQuiz(questions)}
          primaryColor={black}
          secondaryColor={white}
          disable={questions === undefined || numberOfQuestions < 1}
        />
      </View>
    </View>
  );
};

export default connect(state => ({ decks: state.decks }), null)(IndividualDeck);

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
});
