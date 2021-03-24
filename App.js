import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ActionSheet from './components/ActionSheet';
import Plant from './components/Plant';
// import TodayContainer from './components/TodayContainer';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <Text style={styles.heading}>water today</Text>
          <FlatGrid
            style={styles.todayList}
            itemDimension={100}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
            renderItem={({ item }) => (<Plant name="julian" />)}
          />
        </ScrollView>

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
  },
  innerContainer: {
    position: 'absolute',
    top: 40,
    height: height - 150,
    marginBottom: 100,
  },
  heading: {
    top: 30,
    left: 15,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fed0cc',
  },
  todayList: {
    top: 40,
    marginBottom: 150,
  }
});
