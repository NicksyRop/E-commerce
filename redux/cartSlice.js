import { createSlice } from "@reduxjs/toolkit";

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
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeItemFromCart: (state, action) => {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
