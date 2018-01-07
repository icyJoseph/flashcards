import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import configureStore from "./store/configureStore";
import { black, gray, white } from "./utils/colors";

import Decks from "./components/Decks";

const FitnessStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? gray : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : gray,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Decks: {
    screen: Decks,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <FitnessStatusBar backgroundCOlor={black} barStyle="light-content" />
          <MainNavigator />
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
