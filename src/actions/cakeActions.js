//This have action and reducer combined

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

//Async Action Creator (
export const getAllCakes = createAsyncThunk('cakes/getAllCakes', async () => {
  try {
    const response = await Axios.get("http://localhost:8000/getcakes");
    console.log(response)
    return response.data;
  } catch (error) {
    // Handle error if Axios request fails
    throw new Error("Failed to fetch cakes");
  }
});

//Slice Reducer
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