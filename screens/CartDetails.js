import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useSelector, useDispatch } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  decremanetCart,
  increamentCart,
  removeItemFromCart,
} from "../redux/cartSlice";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncreament = (item) => {
    dispatch(increamentCart(item));
  };

  const handleDecreament = (item) => {
    dispatch(decremanetCart(item));
  };
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
        <TouchableOpacity
          style={styles.lower1}
          onPress={() => handleDelete(item)}
        >
          <Icon name="trash" size={23} />
          <Text style={{ marginLeft: 5 }}>REMOVE</Text>
        </TouchableOpacity>

        <View style={styles.lower2}>
          <Button title="+" onPress={() => handleIncreament(item)} />
          <Text> {item.cartQuantity}</Text>
          <Button title="-" onPress={() => handleDecreament(item)} />
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
        <View style={styles.card}>
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

  card: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 10,
  },
});

export default CartDetails;
