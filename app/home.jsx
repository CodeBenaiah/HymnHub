import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePathname } from "expo-router";

export default function HomeScreen() {
  const pathname = usePathname();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          {pathname === "/books" && <BooksContent />}
          {pathname === "/authors" && <AuthorsContent />}
          {pathname === "/favourites" && <FavouritesContent />}
          {pathname === "/search" && <SearchContent />}
          {pathname === "/settings" && <SettingsContent />}
        </View>
      </View>
    </SafeAreaView>
  );
}

function BooksContent() {
  const books = [
    { id: 1, title: "Hymns of Faith" },
    { id: 2, title: "Songs of Praise" },
    // Add more books here
  ];

  return (
    <View style={styles.cardContainer}>
      {books.map((book) => (
        <View key={book.id} style={styles.card}>
          <Text style={styles.cardTitle}>{book.title}</Text>
        </View>
      ))}
    </View>
  );
}

// Similarly, create AuthorsContent, FavouritesContent, SearchContent, and SettingsContent components

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#182026",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 45,
    fontFamily: "BebasNeue", // Bebas Neue font for HymnHub
    color: "#ffffff", // White text color
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto", // Roboto font for subtitle
    color: "#ffffff", // White text color
  },
  content: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 15,
    backgroundColor: "#444", // Card background color
    marginBottom: 15,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Roboto", // Roboto font for card titles
    color: "#ffffff", // White text color
  },
});
