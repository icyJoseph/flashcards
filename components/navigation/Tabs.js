import { Platform } from "react-native";
import { TabNavigator } from "react-navigation";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Decks from "../Decks";
import NewDeck from "../NewDeck";
import { black, gray, white, tint } from "../../utils/colors";

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
        shadowColor: tint,
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

export default Tabs;
