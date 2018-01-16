import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import Title from "./Title";
import InteractiveButton from "./InteractiveButton";
import { newDeck } from "../actions";
import { black, white } from "../utils/colors";

class NewDeck extends Component {
  state = {
    input: "",
    disableSubmitButton: true
  };

  // If the title does not exist, return false, otherwise true
  titleExists = title => {
    const existingTitles = Object.keys(this.props.decks);
    return existingTitles.indexOf(title) === -1 ? false : true;
  };

  warning = () => {
    return this.titleExists(this.state.input.toLowerCase()) ? (
      <Text style={{ color: "red" }}>The title already exists</Text>
    ) : null;
  };

  handleTextChange = input => {
    if (input !== "") {
      this.setState({
        input,
        disableSubmitButton: this.titleExists(input.toLowerCase())
          ? true
          : false
      });
    } else {
      this.setState({
        input,
        disableSubmitButton: true
      });
    }
  };

  submitTitle = () => {
    newDeck.payload = this.state.input.toLowerCase();
    this.props.dispatch(newDeck);
    this.setState({ input: "", disableSubmitButton: true });
    Keyboard.dismiss();
    this.props.navigation.navigate("IndividualDeck", {
      title: newDeck.payload
    });
  };

  render() {
    const { input, disableSubmitButton } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Title
            style={{ padding: 10, margin: 25 }}
            borderColor="transparent"
            title={"What's the title of your new deck?"}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={this.handleTextChange}
          />
        </View>
        <View style={{ flex: 3 }}>
          {this.warning()}
          <InteractiveButton
            text={disableSubmitButton ? "Enter a valid title" : "Create Deck"}
            interaction={this.submitTitle}
            primaryColor={black}
            secondaryColor={white}
            disable={disableSubmitButton}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(state => ({ decks: state.decks }), null)(NewDeck);

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10
  }
});
