import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodayContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 170,
  },
});
