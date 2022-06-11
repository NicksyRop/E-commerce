import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

import { getProduct } from "../services/products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";

const ProductDetails = ({ route, navigation }) => {
  const { productId } = route.params;

  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>

      <View styl={styles.infoContainer}>
        <Text style={styles.name}> {product.name}</Text>
        <Text style={styles.price}> {product.price}</Text>
        <Text style={styles.description}> {product.details}</Text>
      </View>
      <Button title="Add To Cart" onPress={() => handleAddToCart(product)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: "4%",
  },

  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 1.6,
    resizeMode: "contain",
  },

  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default ProductDetails;
