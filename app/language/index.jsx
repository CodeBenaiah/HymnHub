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

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    // Extract unique languages from the data
    const allSongs = [];
    Object.values(data).forEach((songs) => {
      allSongs.push(...songs);
    });

    const uniqueLanguages = [...new Set(allSongs.map((song) => song.Language))];
    setLanguages(uniqueLanguages);
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const handleLanguageSelect = (language) => {
    // Navigate to the dynamic language page
    router.push(`/language/${language}`);
  };

  const renderLanguages = () => (
    <View style={styles.books_container}>
      <Text style={styles.sectionTitle}>Languages</Text>
      <Text style={styles.sectionSubtitle}>Available Song Books</Text>
      <FlatList
        data={languages}
        renderItem={({ item: language, index }) => (
          <TouchableOpacity
            style={styles.booksCard}
            onPress={() => handleLanguageSelect(language)}
          >
            <Text style={styles.listTitle}>{language}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );

  return <View style={styles.roundedTopContainer}>{renderLanguages()}</View>;
}
