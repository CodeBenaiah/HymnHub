// app/settings/index.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Change Language</Text>
      </TouchableOpacity>
      {/* Add more settings options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#182026", // Main background color
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#ffffff",
    marginBottom: 20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#444",
  },
  optionText: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
