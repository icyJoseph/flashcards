import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeckDetail = ({ title, questions }) => {
  const numberOfQuestions = questions.length;
  return (
    <View style={[styles.container, styles.item]}>
      <Text style={{ fontSize: 24, fontWeight: "200" }}>{title}</Text>
      <Text style={{ fontSize: 16 }}>{numberOfQuestions} questions</Text>
    </View>
  );
};

export default DeckDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#fff"
  },
  item: {
    padding: 10,
    height: 200
  }
});
