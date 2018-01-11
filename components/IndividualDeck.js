import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { white, black } from "../utils/helpers";

class IndividualDeck extends Component {
  _goBack = () => {
    this.props.navigation.goBack("Decks");
  };

  toAddCard = title => {
    this.props.navigation.navigate("AddCard", { title });
  };

  render() {
    const { title } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Individual Deck</Text>
        <Text>{title}</Text>
        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.toAddCard(title)}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
        >
          <Text style={{ fontSize: 24, textAlign: "center", color: white }}>
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => ({ decks: state.decks }))(IndividualDeck);

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
