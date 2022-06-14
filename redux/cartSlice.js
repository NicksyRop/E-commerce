import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const storeItems = async (value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem("cartItems", jsonValue);
};

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = { ...action.payload, cartQuantity: 1 };

      //check if the item is in cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //find the item using index
        state.cartItems[itemIndex].cartQuantity += 1;
        Toast.show({
          type: "success",
          text2: ` ${action.payload.name} quantity updated`,
        });

        storeItems(state.cartItems);
      } else {
        state.cartItems.push(newItem);
        Toast.show({
          type: "success",
          text2: ` ${action.payload.name} added to cart`,
        });

        storeItems(state.cartItems);
      }
    },
    removeItemFromCart: (state, action) => {
      //filter products that dont match the id
      const remainingItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = remainingItems;
      Toast.show({
        type: "error",
        text2: ` ${action.payload.name} removed from cart`,
      });

      storeItems(state.cartItems);
    },

    clearCart: (state, action) => {
      state.cartItems = [];

      storeItems(state.cartItems);
      Toast.show({
        type: "success",
        text2: ` Cart has been cleared`,
      });
    },

    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;

          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    increamentCart: (state, action) => {
      //get item index

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[itemIndex].cartQuantity += 1;
      storeItems(state.cartItems);

      Toast.show({
        type: "success",
        text2: ` ${action.payload.name}  cart quantity  updated`,
      });
    },

    decremanetCart: (state, action) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[cartIndex].cartQuantity > 1) {
        state.cartItems[cartIndex].cartQuantity -= 1;
        storeItems(state.cartItems);
        Toast.show({
          type: "error",
          text2: ` ${action.payload.name}  cart quantity  updated`,
        });
      } else if (state.cartItems[cartIndex].cartQuantity === 1) {
        const newItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = newItems;
        storeItems(state.cartItems);

        Toast.show({
          type: "error",
          text2: ` ${action.payload.name} removed from cart`,
        });
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increamentCart,
  decremanetCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
