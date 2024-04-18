import { configureStore } from '@reduxjs/toolkit';
import sushiReducer from './slices/sushiSlice';

const store = configureStore({
  reducer: {
    sushi: sushiReducer,
  },
});

export default store;
