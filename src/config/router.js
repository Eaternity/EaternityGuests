import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Feed from "../screens/Feed";
import Home from "../screens/Home";
// import Settings from "../screens/Settings";
import ScreenDetail from "../screens/ScreenDetail";
import HTMLDemo from "../config/HTMLDemo";
import pdfDemo from "../config/pdfDemo";

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Apleona FoodPRINT"
    }
  },
  Details: {
    screen: ScreenDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title.toUpperCase()
    })
  }
});

// export const Tabs = TabNavigator({
//   Feed: {
//     screen: FeedStack,
//     navigationOptions: {
//       tabBarLabel: "Feed",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="list" size={35} color={tintColor} />
//       )
//     }
//   },
//   Me: {
//     screen: Me,
//     navigationOptions: {
//       tabBarLabel: "Me",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="account-circle" size={35} color={tintColor} />
//       )
//     }
//   }
// });

export const Root = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Feed: {
      screen: FeedStack
    },
    HTMLDemo: {
      screen: HTMLDemo
    },
    pdfDemo: {
      screen: pdfDemo
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
