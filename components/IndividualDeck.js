import React, { Component } from "react";
import { View, Text } from "react-native";

class IndividualDeck extends Component {
  render() {
    const { title } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Individual Deck</Text>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default IndividualDeck;
