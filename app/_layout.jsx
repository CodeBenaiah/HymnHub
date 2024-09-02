import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link, usePathname } from "expo-router";
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

  const pathname = usePathname();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {pathname !== "/splash" && ( // Conditionally render header
          <View style={styles.header}>
            <Text style={styles.title}>HymnHub</Text>
            <Text style={styles.subtitle}>Hub for Christian Songs</Text>
          </View>
        )}

        <Slot />

        {pathname !== "/splash" && ( // Conditionally render navigation bar
          <SafeAreaView style={styles.navigationSafeArea}>
            <View style={styles.navigation}>
              <Link href="/books" asChild>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    source={booksIcon}
                    style={[
                      styles.icon,
                      pathname === "/books" && styles.activeIcon,
                    ]}
                  />
                  <Text style={styles.label}>Books</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/language" asChild>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    source={languageIcon}
                    style={[
                      styles.icon,
                      pathname === "/language" && styles.activeIcon,
                    ]}
                  />
                  <Text style={styles.label}>Language</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/search" asChild>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    source={searchIcon}
                    style={[
                      styles.icon,
                      pathname === "/search" && styles.activeIcon,
                    ]}
                  />
                  <Text style={styles.label}>Search</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/authors" asChild>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    source={authorIcon}
                    style={[
                      styles.icon,
                      pathname === "/authors" && styles.activeIcon,
                    ]}
                  />
                  <Text style={styles.label}>Authors</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/bookmarked" asChild>
                <TouchableOpacity style={styles.iconContainer}>
                  <Image
                    source={bookmarkIcon}
                    style={[
                      styles.icon,
                      pathname === "/bookmarked" && styles.activeIcon,
                    ]}
                  />
                  <Text style={styles.label}>Bookmark</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </SafeAreaView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#182026",
  },
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
  header: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 45,
    fontFamily: "BebasNeue",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
  navigationSafeArea: {
    backgroundColor: "#182026", // Match background color to main container
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#111", // Slightly lighter border for visibility
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 27,
    height: 27,
    tintColor: "#ffffff", // Default icon color
  },
  label: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 5,
  },
  activeIcon: {
    tintColor: "#FFD700", // Gold color for active icon
  },
});
