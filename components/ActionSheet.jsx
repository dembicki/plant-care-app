import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-eva-icons";

import plus from "../assets/plus-solid.svg";

const { width, height } = Dimensions.get("screen");

const ActionSheet = (props) => {
  const [alignment] = useState(new Animated.Value(0));

  const bringUpAnimationSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
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
    outputRange: [-height / 2.4 + 150, 0],
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
      <Text style={styles.subHeading}>you have 8 plants</Text>
      <TouchableWithoutFeedback onPress={() => alert("Add new plant")}>
        <View style={styles.add}>
          <Text style={styles.addText}>Add</Text>
        </View>
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
    height: height / 2.4,
    width: width,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  grabber: {
    width: 60,
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
});

export default ActionSheet;
