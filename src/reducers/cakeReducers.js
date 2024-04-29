import { createSlice } from "@reduxjs/toolkit";
import { getAllCakes } from "../actions/cakeActions";

// Slice Reducer
const cakeSlice = createSlice({
  name: "cakes",
  initialState: {
    cakes: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCakes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCakes.fulfilled, (state, action) => {
        state.loading = false;
        state.cakes = action.payload;
      })
      .addCase(getAllCakes.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default cakeSlice.reducer;