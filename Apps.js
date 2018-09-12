import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { MainNavigator } from "./src/config/route";

export default class App extends Component<Props> {
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
