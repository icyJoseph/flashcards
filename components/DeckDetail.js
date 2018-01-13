import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { NavigationActions } from "react-navigation";
import Title from "./Title";

class DeckDetail extends Component {
  state = {
    fade: new Animated.Value(1)
  };

  animateBeforeNavigating = (title, handleOnPress) => {
    Animated.sequence([
      Animated.spring(this.state.fade, {
        toValue: 0.3,
        friction: 2
      }),
      Animated.spring(this.state.fade, {
        toValue: 1,
        duration: 500
      })
    ]).start(() => handleOnPress(title));
  };

  render() {
    const { title, questions, handleOnPress } = this.props;
    const { fade } = this.state;
    const numberOfQuestions = questions.length;
    return (
      <TouchableOpacity
        onPress={() => this.animateBeforeNavigating(title, handleOnPress)}
      >
        <Animated.View style={{ opacity: fade }}>
          <Title title={title} numberOfQuestions={numberOfQuestions} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default DeckDetail;
