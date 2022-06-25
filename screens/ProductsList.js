import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import Product from "../components/Product";
import Banner from "../components/Banner";
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

  const renderFooter = () => {
    return <View style={{ marginTop: 60 }}></View>;
  };
  useEffect(() => {
    setProducts(getProducts());
  });
  return (
    <View style={styles.container}>
      <TopBar />
      <Banner />
      <FlatList
        style={styles.container}
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        ListFooterComponent={renderFooter}
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
