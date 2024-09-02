import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Slot, Link } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

// Import your custom icons
const booksIcon = require("../assets/images/books.png");
const languageIcon = require("../assets/images/language.png");
const searchIcon = require("../assets/images/search.png");
const authorIcon = require("../assets/images/author.png");
const bookmarkIcon = require("../assets/images/bookmark.png");

export default function Layout() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.navigation}>
        <Link href="/books" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={booksIcon} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/settings" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={languageIcon} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/search" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={searchIcon} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/authors" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={authorIcon} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/favourites" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={bookmarkIcon} style={styles.icon} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#182026",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#182026", // Main background color
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#182026", // Navigation background color
    borderTopWidth: 1,
    borderColor: "#111", // Slightly lighter border for visibility
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 27,
    height: 27,
    tintColor: "#ffffff", // Tint the icons to white if needed
  },
});
