import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
  Switch,
  Button,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import SongDetails from "../searchsong.jsx"; // Import the SongDetails component
import data from "../../assets/data.json"; // Import the JSON data
import styles from "../../assets/styles/styles.js";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false); // State for filter modal visibility
  const [selectedBooks, setSelectedBooks] = useState([]); // State to store selected books for filtering
  const [selectedLanguages, setSelectedLanguages] = useState([]); // State to store selected languages for filtering

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
    ); // Show a loading indicator while fonts are loading
  }

  // Get unique books and languages from data
  const uniqueBooks = [...new Set(Object.keys(data))];
  const uniqueLanguages = [
    ...new Set(
      Object.values(data)
        .flat()
        .map((hymn) => hymn.Language)
        .filter((lang) => lang) // Filter out undefined/null languages
    ),
  ];

  // Filter the hymns based on the search query and selected filters
  const filteredHymns = Object.keys(data)
    .flatMap((bookName) =>
      data[bookName].map((hymn, index) => ({
        ...hymn,
        bookName,
        id: `${bookName}-${index}`, // Create a unique ID for each hymn
      }))
    )
    .filter((hymn) => {
      const matchesQuery =
        hymn.Title.toLowerCase().includes(query.toLowerCase()) ||
        hymn.Lyrics.toLowerCase().includes(query.toLowerCase());

      const matchesBook = selectedBooks.length
        ? selectedBooks.includes(hymn.bookName)
        : true;

      const matchesLanguage = selectedLanguages.length
        ? selectedLanguages.includes(hymn.Language)
        : true;

      return matchesQuery && matchesBook && matchesLanguage;
    });

  const handleSongSelect = (song) => {
    const songIndex = filteredHymns.findIndex((hymn) => hymn.id === song.id);

    setSelectedSong({
      ...song,
      songNumberKey: Object.keys(song).find(
        (key) => !["Title", "Link / Audio", "Lyrics", "bookName"].includes(key)
      ),
      songsData: data, // Pass the full data
      currentSongIndex: songIndex,
      onSongSelect: handleSongSelect, // Pass the function to handle song selection
    });
  };

  const handleBookSelection = (book) => {
    setSelectedBooks((prev) =>
      prev.includes(book) ? prev.filter((b) => b !== book) : [...prev, book]
    );
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const renderFilterOptions = () => (
    <Modal
      visible={isFilterModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setIsFilterModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.modalTitle}>Filter by:</Text>

            <Text style={styles.filterCategory}>Books</Text>
            {uniqueBooks.map((book) => (
              <View key={book} style={styles.switchContainer}>
                <Text style={styles.switchLabel}>{book}</Text>
                <Switch
                  value={selectedBooks.includes(book)}
                  onValueChange={() => handleBookSelection(book)}
                />
              </View>
            ))}

            <Text style={styles.filterCategory}>Languages</Text>
            {uniqueLanguages.map((language) => (
              <View key={language} style={styles.switchContainer}>
                <Text style={styles.switchLabel}>{language}</Text>
                <Switch
                  value={selectedLanguages.includes(language)}
                  onValueChange={() => handleLanguageSelection(language)}
                />
              </View>
            ))}

            <View style={styles.buttonContainer}>
              <Button
                title="Clear Filters"
                onPress={() => {
                  setSelectedBooks([]);
                  setSelectedLanguages([]);
                  setIsFilterModalVisible(false);
                }}
              />
              <Button
                title="Done"
                onPress={() => setIsFilterModalVisible(false)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.roundedTopContainer}>
      {!selectedSong && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search hymns..."
            placeholderTextColor="#aaa"
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity onPress={() => setIsFilterModalVisible(true)}>
            <Image
              source={require("../../assets/images/filter.png")} // Ensure this path is correct
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      )}
      {renderFilterOptions()}
      {selectedSong ? (
        <SongDetails
          selectedSong={selectedSong}
          selectedBook={selectedSong.bookName}
          songNumberKey={selectedSong.songNumberKey}
          songsData={selectedSong.songsData}
          currentSongIndex={selectedSong.currentSongIndex}
          onSongSelect={selectedSong.onSongSelect}
        />
      ) : (
        <FlatList
          data={filteredHymns}
          keyExtractor={(item) => item.id} // Use the unique ID for key extraction
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.booksCard} // Apply booksCard style
              onPress={() => handleSongSelect(item)}
            >
              <View style={styles.songInfo}>
                <View style={styles.titleContainer}>
                  <Text style={styles.listTitle}>{item.Title}</Text>
                  <Text style={styles.bookName}>{item.bookName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
