import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link, usePathname, useRouter } from "expo-router"; // Import useRouter
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import styles from "../assets/styles/styles.js";

// Import your custom icons
const languageIcon = require("../assets/images/language.png");
const searchIcon = require("../assets/images/search.png");
const authorIcon = require("../assets/images/author.png");
const bookmarkIcon = require("../assets/images/bookmark.png");

export default function Layout() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
  });

  const pathname = usePathname();
  const router = useRouter();

  // If fonts are not loaded, display a loading indicator
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
          <View style={styles.navigation}>
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
        )}
      </View>
    </SafeAreaView>
  );
}
