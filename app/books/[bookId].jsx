// app/books/[bookId].jsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

const hymns = [
  { number: 1, title: "Amazing Grace" },
  { number: 2, title: "How Great Thou Art" },
  // Add more hymns here
];

export default function BookDetailsScreen() {
  const { bookId } = useSearchParams(); // Updated to use useSearchParams

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hymns in Book {bookId}</Text>
      <FlatList
        data={hymns}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <View style={styles.hymnItem}>
            <Text style={styles.hymnNumber}>{item.number}.</Text>
            <Text style={styles.hymnTitle}>{item.title}</Text>
          </View>
        )}
      />
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
  hymnItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#444",
  },
  hymnNumber: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
    width: 40,
  },
  hymnTitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
