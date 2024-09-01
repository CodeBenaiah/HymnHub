// app/books/index.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const books = [
  { id: 1, title: "Hymns of Faith" },
  { id: 2, title: "Songs of Praise" },
  // Add more books here
];

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Hymn Book</Text>
      {books.map((book) => (
        <Link href={`/books/${book.id}`} key={book.id} asChild>
          <TouchableOpacity style={styles.bookItem}>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </TouchableOpacity>
        </Link>
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
  bookItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#444", // Darker border for contrast
  },
  bookTitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
