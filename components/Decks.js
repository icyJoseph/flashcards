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
    const titles = Object.keys(decks);
    return (
      <View>
        <Text>All Decks Go here!</Text>
        {titles.length > 0
          ? titles.map(title => <Text key={title}>{decks[title].title}</Text>)
          : null}
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
