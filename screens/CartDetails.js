import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";

import { useSelector } from "react-redux";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      {cart.cartItems.length > 0 ? (
        <View>
          <Text>Cart products</Text>
        </View>
      ) : (
        <View>
          <Text>No items in cart</Text>
        </View>
      )}
    </View>
  );
};

export default CartDetails;
