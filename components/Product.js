import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Product = ({ name, price, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "3%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
    width: Dimensions.get("window").width / 2 - 10,
  },

  image: {
    width: "90%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Product;
