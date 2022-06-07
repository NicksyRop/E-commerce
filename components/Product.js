import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Product = ({ name, price, onPress, image }) => {
  return (
    <TouchableOpacity style={StyleSheet.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: "4%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
});

export default Product;
