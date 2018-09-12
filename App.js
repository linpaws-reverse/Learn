// RNRF logic here
import React, { Component } from "react";
import Welcome from "./src/Components/Welcome";
import RepoList from "./src/Components/repolist";
import RepoInfo from "./src/Components/repoinfo";

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";

const App = StackNavigator(
  {
    Welcome: { screen: Welcome },
    RepoList: { screen: RepoList },
    RepoInfo: { screen: RepoInfo }
  },
  {
    initialRouteName: "Welcome"
  }
);

export default App;
