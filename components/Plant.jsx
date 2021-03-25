import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Plant({ name, image }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert("plant touched")}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      {/* <Text>{name}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
});
