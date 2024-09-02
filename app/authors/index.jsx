// app/authors/index.jsx
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";

const authors = [
  { id: 1, name: "John Newton" },
  { id: 2, name: "Fanny Crosby" },
  // Add more authors here
];

export default function AuthorsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authors</Text>
      {authors.map((author) => (
        <View key={author.id} style={styles.authorItem}>
          <Text style={styles.authorName}>{author.name}</Text>
        </View>
      ))}
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
  authorItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#444",
  },
  authorName: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
