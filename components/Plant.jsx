import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Plant({ name }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert("plant touched")}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0151%2F1650%2F1046%2Fproducts%2FZamioculcas_zamiifolia_Zanzibar_Gem_14cm_Growers_Pot_2400x.jpg%3Fv%3D1563584100&f=1&nofb=1",
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
