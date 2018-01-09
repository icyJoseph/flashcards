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
import { newDeck } from "../actions";
import { black, white } from "../utils/colors";

export class NewDeck extends Component {
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
    return this.titleExists(this.state.input) ? (
      <Text style={{ color: "red" }}>The title already exists</Text>
    ) : null;
  };

  handleTextChange = input => {
    if (input !== "") {
      this.setState({
        input,
        disableSubmitButton: this.titleExists(input) ? true : false
      });
    } else {
      this.setState({
        input,
        disableSubmitButton: true
      });
    }
  };

  submitTitle = () => {
    newDeck.payload = this.state.input;
    this.props.dispatch(newDeck);
    this.setState({ input: "", disableSubmitButton: true });
    this.props.navigation.navigate("IndividualDeck", {
      title: newDeck.payload
    });
  };

  render() {
    const { input, disableSubmitButton } = this.state;
    return (
      <View>
        <Text>What's the title of your new deck?</Text>
        <TextInput value={input} onChangeText={this.handleTextChange} />
        {this.warning()}
        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
          onPress={this.submitTitle}
          disabled={disableSubmitButton}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            {disableSubmitButton ? "Enter a valid title" : "Create Deck"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => ({ decks: state.decks }), null)(NewDeck);

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
