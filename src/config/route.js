import React, { Component } from "react";
// Navigators
import {
  createDrawerNavigator,
  createStackNavigator,
  TabNavigator
} from "react-navigation";

import Streems from "../screens/Streems/Streems";
import Settings from "../screens/Settings/Settings";

export const DrawerMenu = createStackNavigator(
  {
    Streems: {
      screen: Streems,
      navigationOptions: {
        title: "Streems"
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {
    initialRouteName: "Streems"
  }
);

export const MainNavigator = createDrawerNavigator({
  Menu: {
    screen: DrawerMenu,
    navigationOptions: {
      title: "Block Design"
    }
  }
});
