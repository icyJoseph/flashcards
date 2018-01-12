import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
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
        answer: this.state.inputQuestion
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
        <Text>Add a new card</Text>
        <Text>Question?</Text>
        <TextInput
          value={inputQuestion}
          onChangeText={this.handleQuestionChange}
        />
        <Text>Answer</Text>
        <TextInput value={inputAnswer} onChangeText={this.handleAnswerChange} />

        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
          onPress={this.submitCard}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            Add Card
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(undefined, null)(AddCard);

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
