import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router"; // Use expo-router for navigation
import styles from "../../assets/styles/styles.js";

const data = require("../../assets/data.json");

export default function BooksScreen() {
  const router = useRouter(); // Initialize router for navigation

  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const handleBookSelect = (bookName) => {
    // Navigate to the dynamic book page
    router.push(`/books/${bookName}`);
  };

  const renderBooks = () => (
    <View style={styles.books_container}>
      <Text style={styles.bookTitle}>Available Books</Text>
      <Text style={styles.sectionSubtitle}>Available Song Books</Text>
      <FlatList
        data={Object.keys(data)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.booksCard}
            onPress={() => handleBookSelect(item)}
          >
            <Text style={styles.listTitle}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );

  return <View style={styles.roundedTopContainer}>{renderBooks()}</View>;
}
