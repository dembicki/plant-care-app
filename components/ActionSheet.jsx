import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  TouchableWithoutFeedback,
  ListViewBase,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-eva-icons";

import plus from "../assets/plus-solid.svg";

const { width, height } = Dimensions.get("screen");

const ActionSheet = (props) => {
  const plants = props.plants;

  const [alignment] = useState(new Animated.Value(0));

  const bringUpAnimationSheet = () => {
    Animated.timing(alignment, {
      toValue: 0.85,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const hideTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 1 + 250, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) bringUpAnimationSheet();
    else if (e.nativeEvent.contentOffset.y < 0) hideTheActionSheet();
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <ScrollView
        onScroll={(e) => gestureHandler(e)}
        style={styles.grabber}
      ></ScrollView>
      <Text style={styles.heading}>my plants</Text>
      <Text style={styles.subHeading}>you have {plants.length} plants</Text>
      <TouchableWithoutFeedback onPress={() => alert("Add new plant")}>
        <>
          <View style={styles.add}>
            <Text style={styles.addText}>Add</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={plants}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image style={styles.itemImage} source={{ uri: item.img }} />
                  <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemSpecies}>({item.species})</Text>
                    <Text style={styles.itemLastWatered}>
                      Last watered: 02.03.2021
                    </Text>
                  </View>
                  <Text style={styles.itemEdit}>Edit</Text>
                </View>
              )}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#fff",
    left: 0,
    right: 0,
    bottom: 0,
    height: height - 100,
    width: width,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  grabber: {
    width: 90,
    height: 60,
    borderTopWidth: 5,
    borderTopColor: "#aaa",
    alignSelf: "center",
    borderRadius: 2,
    marginTop: 10,
  },
  heading: {
    position: "absolute",
    top: 40,
    left: 25,
    fontSize: 38,
    fontWeight: "bold",
    color: "black",
  },
  subHeading: {
    position: "absolute",
    top: 86,
    left: 25,
    fontSize: 15,
    fontWeight: "bold",
    color: "#7b7b7b",
  },
  add: {
    position: "absolute",
    top: 45,
    right: 25,
    fontSize: 15,
    fontWeight: "bold",
    color: "#7b7b7b",
    backgroundColor: "black",
    display: "flex",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  addText: {
    color: "white",
  },
  listContainer: {
    position: "relative",
    padding: 15,
    top: -20,
    height: height * 0.7,
    paddingBottom: 100,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    padding: 15,
    marginBottom: 5,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  itemImage: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginRight: -40,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 3,
  },
  itemSpecies: {
    fontSize: 15,
    marginBottom: 6,
  },
  itemLastWatered: {
    color: "blue",
    opacity: 0.8,
  },
  itemEdit: {
    color: "red",
  },
});

export default ActionSheet;
