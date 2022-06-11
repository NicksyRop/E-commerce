import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Button,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart);
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          resizeMode="contain"
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View>
          <Text> {item.name}</Text>
          <Text> {item.price}</Text>
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.lower1}>
          <Icon name="trash" sizde={16} />
          <Text>REMOVE</Text>
        </View>

        <View style={styles.lower2}>
          <Button title="+" />
          <Text> {item.cartQuantity}</Text>
          <Button title="-" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      {cart.cartItems.length > 0 ? (
        <View>
          <Text>CART SUMMARY</Text>
          <FlatList
            data={cart.cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View>
          <Text>No items in cart</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: 10,
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lower: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lower1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lower2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width / 2 - 60,
    height: Dimensions.get("window").width / 2 - 60,
  },
  button: {},
});

export default CartDetails;
