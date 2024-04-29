import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// Async Action Creator
export const getAllCakes = createAsyncThunk('cakes/getAllCakes', async () => {
  try {
    const response = await Axios.get("http://localhost:8000/getcakes");
    return response.data;
  } catch (error) {
    // Handle error if Axios request fails
    throw new Error("Failed to fetch cakes");
  }
});