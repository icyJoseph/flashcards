import React, { Component } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

import DeckDetail from "./DeckDetail";

class Decks extends Component {
  state = {
    fadeIn: new Animated.Value(0)
  };

  componentDidMount() {
    this.props.dispatch(actions.getAllDecks);
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  onItemPress = title => {
    this.props.navigation.navigate("IndividualDeck", { title });
  };

  render() {
    const titles = Object.keys(this.props.decks);
    const decks = Object.values(this.props.decks);
    const { fadeIn } = this.state;
    return (
      <Animated.View style={[{ opacity: fadeIn }]}>
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          renderItem={deck => {
            return (
              <DeckDetail
                key={deck.index}
                {...deck.item}
                handleOnPress={this.onItemPress}
              />
            );
          }}
        />
      </Animated.View>
    );
  }
}

export default connect(
  state => ({
    decks: state.decks
  }),
  null
)(Decks);
