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
      duration: 2000
    }).start();
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%"
        }}
      />
    );
  };

  onItemPress = title => {
    this.props.navigation.navigate("IndividualDeck", { title });
  };

  render() {
    const decks = Object.values(this.props.decks).sort(
      (a, b) => a.timestamp - b.timestamp
    );

    const { fadeIn } = this.state;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeIn,
          margin: 10,
          justifyContent: "center"
        }}
      >
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={deck => {
            return (
              <DeckDetail
                key={deck.index}
                {...deck.item}
                handleOnPress={this.onItemPress}
                style={{ height: 200, padding: 10 }}
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
