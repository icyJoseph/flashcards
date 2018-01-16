import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalizer } from "../utils/helpers";

const Title = ({ title, numberOfQuestions, borderColor }) => {
  return (
    <View
      style={[
        styles.container,
        styles.item,
        { borderColor: borderColor || "rgba(0,0,0,0)" }
      ]}
    >
      <Text style={{ fontSize: 24, fontWeight: "200" }}>
        {capitalizer(title)}
      </Text>
      {numberOfQuestions !== undefined ? (
        <Text style={{ fontSize: 16 }}>
          {numberOfQuestions} {numberOfQuestions === 1 ? " card" : " cards"}
        </Text>
      ) : null}
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
    borderWidth: 0.5
  },
  item: {
    padding: 10
  }
});
