import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

const DeckDetail = ({ title, questions, navigation }) => {
  const numberOfQuestions = questions.length;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("IndividualDeck", { title })}
    >
      <View style={[styles.container, styles.item]}>
        <Text style={{ fontSize: 24, fontWeight: "200" }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{numberOfQuestions} cards</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeckDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#fff"
  },
  item: {
    padding: 10,
    height: 200
  }
});
