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
    const disableSubmit = inputQuestion === "" || inputAnswer === "";
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Title title={"Add a new card"} />
        </View>
        <View style={{ flex: 4 }}>
          <Title title={"Question?"} />
          <TextInput
            style={styles.input}
            value={inputQuestion}
            onChangeText={this.handleQuestionChange}
          />
        </View>
        <View style={{ flex: 4 }}>
          <Title title={"Answer"} />
          <TextInput
            style={styles.input}
            value={inputAnswer}
            onChangeText={this.handleAnswerChange}
          />
        </View>
        <View style={{ flex: 4 }}>
          <InteractiveButton
            text={disableSubmit ? "Fill in Question and Answer" : "Add Card"}
            interaction={this.submitCard}
            primaryColor={black}
            secondaryColor={white}
            disable={disableSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(undefined, null)(AddCard);

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 20
  }
});
