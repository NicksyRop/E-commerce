import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

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
      } else {
        state.cartItems.push(newItem);
        Toast.show({
          type: "success",
          text2: ` ${action.payload.name} added to cart`,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      //filter products that dont match the id
      const remainingItems = state.cartItems.filter(
        (item) => item.is !== action.payload.id
      );

      state.cartItems = remainingItems;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
