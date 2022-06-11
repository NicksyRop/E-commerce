import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeItems = async (value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem("cartItems", jsonValue);
};

const getItems = async () => {
  const data = await AsyncStorage.getItem("cartItems");

  if (data !== null) {
    return await JSON.parse(data);
  } else {
    return state;
  }
};

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuanity: 0,
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
        (item) => item.is !== action.payload.id
      );

      state.cartItems = remainingItems;

      storeItems(state.cartItems);
    },

    clearCart: (state, action) => {
      state.cartItems = [];

      storeItems(state.cartItems);
    },

    getTotals: (state, action) => {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
