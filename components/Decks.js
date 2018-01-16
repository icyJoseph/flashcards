import React, { Component } from "react";
import { View, Text, FlatList, Animated, Easing } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { MaterialIcons } from "@expo/vector-icons";
import DeckDetail from "./DeckDetail";

class Decks extends Component {
  state = {
    fadeIn: new Animated.Value(0),
    spinValue: new Animated.Value(0),
    showSpinner: false
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
    this.setState({ showSpinner: true });
    Animated.timing(this.state.spinValue, {
      toValue: 360,
      duration: 3000,
      easing: Easing.linear
    }).start(() => {
      this.setState({ showSpinner: false, spinValue: new Animated.Value(0) });
      this.props.navigation.navigate("IndividualDeck", { title });
    });
  };

  render() {
    const decks = Object.values(this.props.decks).sort(
      (a, b) => a.timestamp - b.timestamp
    );

    const { fadeIn, showSpinner, spinValue } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeIn,
          margin: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {showSpinner ? (
          <Animated.Image
            style={{
              height: 50,
              width: 50,
              transform: [
                {
                  rotate: spinValue.interpolate({
                    inputRange: [0, 360],
                    outputRange: ["0deg", "360deg"]
                  })
                }
              ]
            }}
            source={require("../assets/images/loading.png")}
          />
        ) : (
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
        )}
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
