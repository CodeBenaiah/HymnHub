import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity of 1

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Duration of fade-out effect
      useNativeDriver: true,
    }).start(() => {
      router.replace("/home"); // Navigate to home screen after fade-out
    });
  }, [fadeAnim, router]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>HymnHub</Text>
      <Text style={styles.subtitle}>Hub for Christian Songs</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#182026",
    justifyContent: "flex-start", // Align content towards the top
    alignItems: "center",
    paddingTop: 250, // Adjust this value to move the content higher
  },
  title: {
    fontSize: 52,
    fontFamily: "BebasNeue",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
