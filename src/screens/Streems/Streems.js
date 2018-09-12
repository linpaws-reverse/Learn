import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Streems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading Streems</Text>
      </View>
    );
  }
}

export default Streems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 20
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
});
