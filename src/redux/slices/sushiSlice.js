import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  sushiItems: [],
  sushiCart: [],
};

export const loadItems = createAsyncThunk('sushi/loadItems', async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const loadCart = createAsyncThunk('sushi/loadCart', async (url) => {
  try {
    const res = await axios.get(url);
    const cartItems = res.data.filter((item) => item.cart === true);
    // console.log('cartItems', cartItems);
    return cartItems;
  } catch (error) {
    throw error;
  }
});

const sushiSlice = createSlice({
  name: 'sushiItems',
  initialState,
  // addToCartItem: (state, action) => {
  //   state.sushiCart;
  // },
  extraReducers: (builder) => {
    builder.addCase(loadItems.fulfilled, (state, action) => {
      state.sushiItems = action.payload;
    });
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.sushiCart = action.payload;
    });
  },
});

export const { toggleCartItem } = sushiSlice.actions;

export const selectSushiItems = (state) => state.sushi.sushiItems;
export const selectSushiCart = (state) => state.sushi.sushiCart;

export default sushiSlice.reducer;
