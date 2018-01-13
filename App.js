import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Constants } from "expo";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import configureStore from "./store/configureStore";

import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";
import IndividualDeck from "./components/IndividualDeck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

import { black, gray, white } from "./utils/colors";
import { setLocalNotification } from "./utils/notifications";

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
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add-to-photos" size={30} color={tintColor} />
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
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintCOlor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintCOlor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintCOlor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  }
});

class App extends Component {
  componentWillMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <View style={{ flex: 1 }}>
          <FitnessStatusBar backgroundCOlor={black} barStyle="light-content" />
          <MainNavigator />
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
