import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { Constants } from "expo";
import configureStore from "./store/configureStore";

import MainNavigator from "./components/navigation/Stack";

import { black } from "./utils/colors";
import { setLocalNotification } from "./utils/notifications";

const FitnessStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <FitnessStatusBar backgroundColor={black} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
