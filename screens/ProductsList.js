import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

import { getProducts } from "../services/products";
const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const renderProduct = ({ item }) => <View></View>;

  useEffect(() => {
    setProducts(getProducts());
  });
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ProductsList;
