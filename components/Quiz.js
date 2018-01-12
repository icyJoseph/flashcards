import React, { Component } from "react";
import {
  View,
  Text,
  Stylesheet,
  Platform,
  TouchableOpacity
} from "react-native";

class Quiz extends Component {
  render() {
    const { questions } = this.props.navigation.state.params;
    return (
      <View>
        <Text>QUIZ</Text>
      </View>
    );
  }
}

export default Quiz;
