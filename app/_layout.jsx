// app/_layout.jsx
import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Slot } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

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
        <Link href="/books" style={styles.icon}>
          <FontAwesome name="book" size={24} color="#ffffff" />
        </Link>
        <Link href="/settings" style={styles.icon}>
          <FontAwesome name="globe" size={24} color="#ffffff" />
        </Link>
        <Link href="/search" style={styles.icon}>
          <FontAwesome name="search" size={24} color="#ffffff" />
        </Link>
        <Link href="/authors" style={styles.icon}>
          <FontAwesome name="user" size={24} color="#ffffff" />
        </Link>
        <Link href="/favourites" style={styles.icon}>
          <FontAwesome name="star" size={24} color="#ffffff" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#182026", // Main background color
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#182026",
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#182026", // Match main background color
  },
  icon: {
    alignItems: "center",
  },
});
