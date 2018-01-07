import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from "expo";
import configureStore from "./store/configureStore";
import { black, gray } from "./utils/colors";

const FitnessStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <FitnessStatusBar backgroundCOlor={black} barStyle="light-content" />
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
