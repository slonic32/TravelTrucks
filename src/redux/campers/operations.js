import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const perPage = 4;

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchDetails = createAsyncThunk(
  "campers/fetchD",
  async ({ camperId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const response = await axios.get(`/${camperId}`);

      return { ...response.data };
    } catch (e) {
      if (e.response.status === 404) {
        return {};
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      let request = `?page=${page}&limit=${perPage}`;

      if (state.filters.location) {
        request = request + `&location=${state.filters.location}`;
      }

      if (state.filters.type) {
        request = request + `&form=${state.filters.type}`;
      }

      if (state.filters.options) {
        state.filters.options.map(opt => {
          if (opt === "automatic") {
            request = request + `&transmission=automatic`;
          } else {
            request = request + `&${opt}=true`;
          }
        });
      }

      const response = await axios.get(request);

      return { ...response.data, page: page };
    } catch (e) {
      if (e.response.status === 404) {
        return { total: 0, items: [], page: page };
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
