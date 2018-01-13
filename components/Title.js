import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalizer } from "../utils/helpers";

const Title = ({ title, numberOfQuestions }) => {
  return (
    <View style={[styles.container, styles.item]}>
      <Text style={{ fontSize: 24, fontWeight: "200" }}>
        {capitalizer(title)}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {numberOfQuestions} {numberOfQuestions === 1 ? " card" : "cards"}
      </Text>
    </View>
  );
};

export default Title;

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
