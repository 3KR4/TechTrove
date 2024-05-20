import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(x => x.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    incrementQuantity(state, action) {
      const item = state.cartItems.find(x => x.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find(x => x.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
