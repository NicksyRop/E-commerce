import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import Product from "../components/Product";
import TopBar from "../components/TopBar";

import { getProducts } from "../services/products";
const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const renderProduct = ({ item }) => (
    <Product
      {...item}
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    />
  );

  useEffect(() => {
    setProducts(getProducts());
  });
  return (
    <View style={styles.container}>
      <TopBar />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
export default ProductsList;
