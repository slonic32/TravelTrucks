import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const perPage = 4;

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      let request = `/advert?page=${page}&limit=${perPage}`;

      const response = await axios.get();

      return response.data;
    } catch (e) {
      if (e.response.status === 404) {
        return [];
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
