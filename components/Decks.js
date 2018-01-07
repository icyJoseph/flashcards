import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class Decks extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getAllDecks);
  }
  render() {
    const { decks } = this.props;
    return (
      <View>
        <Text>All Decks Go here!</Text>
        {decks.map(deck => <Text key={deck.title}>{deck.title}</Text>)}
      </View>
    );
  }
}

export default connect(
  state => ({
    decks: state.decks
  }),
  null
)(Decks);
