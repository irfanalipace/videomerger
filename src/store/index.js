import { configureStore } from '@reduxjs/toolkit';
import artSlice from './features/arts/art.slice';

const store = configureStore({
  reducer: {
    hlp: artSlice,
  },
});

export default store;
