import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import Title from "./Title";
import { lightGray } from "../utils/colors";

class DeckDetail extends Component {
  render() {
    const { title, questions, handleOnPress } = this.props;
    const numberOfQuestions = questions.length;
    return (
      <TouchableOpacity onPress={() => handleOnPress(title)}>
        <View style={{ height: 200 }}>
          <Title
            title={title}
            numberOfQuestions={numberOfQuestions}
            borderColor={lightGray}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeckDetail;
