import { createSlice } from '@reduxjs/toolkit';
import { getHlp, postTopHlp } from './art.service';

const initialState = {
  bottomSlides: [],
  topHlp: [],
  loading: false,
  error: null,
};

const artSlice = createSlice({
  name: 'hlp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHlp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHlp.fulfilled, (state, action) => {
        state.loading = false;
        state.bottomSlides = action.payload;
      })
      .addCase(getHlp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postTopHlp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTopHlp.fulfilled, (state, action) => {
        state.loading = false;
        state.topHlp = action.payload;
      })
      .addCase(postTopHlp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default artSlice.reducer;
