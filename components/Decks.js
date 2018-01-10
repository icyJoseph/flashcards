import React, { Component } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

import DeckDetail from "./DeckDetail";

class Decks extends Component {
  state = {
    fadeIn: new Animated.Value(0),
    fadeOut: new Animated.Value(1)
  };

  componentDidMount() {
    this.props.dispatch(actions.getAllDecks);
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 5000
    }).start();
  }

  // Should component Update?
  // What to do when Update happens?

  onItemPress = title => {
    // Animate
    Animated.timing(this.state.fadeOut, {
      toValue: 0,
      duration: 3000
    }).start(() => this.props.navigation.navigate("IndividualDeck", { title }));
  };

  render() {
    const titles = Object.keys(this.props.decks);
    const decks = Object.values(this.props.decks);
    const { fadeIn, fadeOut } = this.state;
    return (
      <Animated.View style={[{ opacity: fadeIn }, { opacity: fadeOut }]}>
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
