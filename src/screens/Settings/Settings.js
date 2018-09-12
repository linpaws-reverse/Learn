import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Settings extends Component {
  title = "Settings";
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Component</Text>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c0392b",
    padding: 20
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
});
