import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  sushiItems: [],
  sushiCart: [],
};

export const loadItems = createAsyncThunk('sushi/loadItems', async (url) => {
  // console.log(url);
  try {
    const res = await axios.get(url);
    // console.log('res', res);
    return res.data;
  } catch (error) {
    // thunkAPI.dispatch(setError(error.message));
    // OPTION 1
    // return thunkAPI.rejectWithValue(error);
    // OPTION 2
    throw error;
  }
});

export const loadCart = createAsyncThunk('sushi/loadCart', async (url) => {
  console.log(url);
  try {
    const res = await axios.get(url);
    console.log('res', res);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const sushiSlice = createSlice({
  name: 'sushiItems',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadItems.fulfilled, (state, action) => {
      state.sushiItems = action.payload;
    });
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.sushiCart = action.payload;
    });
  },
});

export const selectSushiItems = (state) => state.sushi.sushiItems;
export const selectSushiCart = (state) => state.sushi.sushiCart;

export default sushiSlice.reducer;
