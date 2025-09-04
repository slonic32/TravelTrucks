import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const perPage = 4;

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const favorite = state.campers.favorite;

      let request = `/advert?page=${page}&limit=${perPage}`;
      if (favorite) {
        request = request + "&favorite=true";
      }
      //const response = await axios.get(request);
      const response = await axios.get();
      console.log(response);

      return response.data;
    } catch (e) {
      if (e.response.status === 404) {
        return [];
      }

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "contacts/toggleFavorite",
  async (camper, thunkAPI) => {
    try {
      const response = await axios.put(`/advert/${camper._id}`, {
        favorite: !camper.favorite,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
