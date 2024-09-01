// app/index.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>HymnHub</Text>
      <Text style={styles.tagline}>Hub for Christian Songs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#182026", // Ensure background color
  },
  appName: {
    fontSize: 48,
    fontFamily: "BebasNeue", // Use Bebas Neue for the app name
    color: "#ffffff", // White color for contrast
  },
  tagline: {
    fontSize: 18,
    fontFamily: "Roboto", // Use Roboto for the subtitle
    color: "#ffffff", // White color for contrast
  },
});
