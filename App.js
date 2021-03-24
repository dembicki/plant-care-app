import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ActionSheet from './components/actionSheet';

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Text style={styles.heading}>water today</Text>
        <StatusBar style="light" />
      </View>
      <ActionSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11493e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    position: 'absolute',
    top: 90,
    left: 20,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fed0cc',
  }
});
