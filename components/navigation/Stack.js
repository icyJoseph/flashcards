import { StackNavigator } from "react-navigation";
import Decks from "../Decks";
import NewDeck from "../NewDeck";
import IndividualDeck from "../IndividualDeck";
import AddCard from "../AddCard";
import Quiz from "../Quiz";

import Tabs from "./Tabs";

import { black, gray, white } from "../../utils/colors";

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

export default MainNavigator;
