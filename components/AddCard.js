import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import Title from "./Title";
import InteractiveButton from "./InteractiveButton";
import { addCard } from "../actions";
import { black, white } from "../utils/colors";

export class AddCard extends Component {
  state = {
    inputQuestion: "",
    inputAnswer: "",
    disableSubmitButton: true
  };

  handleQuestionChange = inputQuestion => {
    this.setState({ inputQuestion });
  };

  handleAnswerChange = inputAnswer => {
    this.setState({ inputAnswer });
  };

  submitCard = () => {
    addCard.payload = {
      title: this.props.navigation.state.params.title,
      card: {
        question: this.state.inputQuestion,
        answer: this.state.inputAnswer
      }
    };
    this.props.dispatch(addCard);
    this.setState({
      inputQuestion: "",
      inputAnswer: "",
      disableSubmitButton: true
    });
    this.props.navigation.goBack();
  };

  render() {
    const { inputQuestion, inputAnswer, disableSubmitButton } = this.state;
    return (
      <View>
        <Title title={"Add a new card"} />
        <Title title={"Question?"} />
        <TextInput
          style={styles.input}
          value={inputQuestion}
          onChangeText={this.handleQuestionChange}
        />
        <Title title={"Answer"} />
        <TextInput
          style={styles.input}
          value={inputAnswer}
          onChangeText={this.handleAnswerChange}
        />
        <InteractiveButton
          text={"Add Card"}
          interaction={this.submitCard}
          primaryColor={black}
          secondaryColor={white}
        />
      </View>
    );
  }
}

export default connect(undefined, null)(AddCard);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
