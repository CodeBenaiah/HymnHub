// app/search/index.jsx
import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

const hymns = [
  { number: 1, title: "Amazing Grace" },
  { number: 2, title: "How Great Thou Art" },
  // Add more hymns here
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filteredHymns = hymns.filter((hymn) =>
    hymn.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search hymns..."
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredHymns}
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
  searchInput: {
    height: 40,
    borderColor: "#444",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#ffffff", // Text color inside input
    fontFamily: "Roboto",
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
