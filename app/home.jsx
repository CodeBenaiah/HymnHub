import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router"; // Use the expo-router
import styles from "../assets/styles/styles.js";

const data = require("../assets/data.json");

export default function HomeScreen() {
  const router = useRouter(); // Initialize router for navigation

  const [view, setView] = useState("books");
  const [selectedBook, setSelectedBook] = useState(null);
  const [songsData, setSongsData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    // Combine all songs for language filtering
    let combinedSongs = [];
    Object.values(data).forEach((songs) => {
      combinedSongs = [...combinedSongs, ...songs];
    });
    setAllSongs(combinedSongs);
  }, []);

  // Define 20 pastel colors for the cards
  const pastelColors = [
    "#FFEBEE",
    "#E3F2FD",
    "#FFF3E0",
    "#E8F5E9",
    "#FFFDE7",
    "#F3E5F5",
    "#E1F5FE",
    "#FCE4EC",
    "#FFF8E1",
    "#ECEFF1",
    "#F5F5F5",
    "#FFCDD2",
    "#C8E6C9",
    "#FFCCBC",
    "#BBDEFB",
    "#DCEDC8",
    "#FFECB3",
    "#CFD8DC",
    "#FFCC80",
    "#B3E5FC",
  ];

  const renderBooks = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Books</Text>
      <Text style={styles.sectionSubtitle}>Available Song Books</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Object.keys(data)}
        renderItem={({ item: book, index }) => (
          <TouchableOpacity
            style={[
              styles.homeCard,
              { backgroundColor: pastelColors[index % pastelColors.length] },
            ]}
            onPress={() => router.push(`/books/${book}`)} // Navigate to dynamic book page
          >
            <Text style={styles.homeCardTitle}>{book}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );

  const renderLanguages = () => {
    const languages = [...new Set(allSongs.map((song) => song.Language))];

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.sectionSubtitle}>Available Song Books</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={languages}
          renderItem={({ item: language, index }) => (
            <TouchableOpacity
              style={[
                styles.homeCard,
                {
                  backgroundColor:
                    pastelColors[(index + 3) % pastelColors.length],
                },
              ]}
              onPress={() => router.push(`/language/${language}`)} // Navigate to dynamic language page
            >
              <Text style={styles.homeCardTitle}>{language}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };

  const renderAuthors = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Authors</Text>
        <Text style={styles.sectionSubtitle}>Available Song Authors</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={["Coming Soon"]}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.homeCard,
                { backgroundColor: pastelColors[index % pastelColors.length] },
              ]}
            >
              <Text style={styles.homeCardTitle}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };

  return (
    <View style={styles.safeContainer}>
      <View style={styles.roundedTopContainer}>
        <ScrollView>
          {renderBooks()}
          {renderLanguages()}
          {renderAuthors()}
        </ScrollView>
      </View>
    </View>
  );
}
