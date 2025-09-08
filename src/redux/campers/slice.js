import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, perPage, fetchDetails } from "./operations";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    favorites: [],
    page: 1,
    more: false,
    camper: {},
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorite(state, action) {
      state.favorites = state.favorites.filter(
        item => item.id != action.payload.id
      );
    },
  },
  extraReducers: builder => {
    builder
      //get
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        if (action.payload.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }
        if (action.payload.total <= perPage * action.payload.page) {
          state.more = false;
        } else {
          state.more = true;
        }
        state.page = action.payload.page;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchDetails.pending, handlePending)
      .addCase(fetchDetails.fulfilled, (state, action) => {
        if (action.payload) {
          state.camper = action.payload;
        } else {
          state.camper = {};
        }

        state.loading = false;
        state.error = null;
      })
      .addCase(fetchDetails.rejected, handleRejected);
  },
});

const campersPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(
  campersPersistConfig,
  campersSlice.reducer
);

export const campersReducer = persistedReducer;

export const { addFavorite, deleteFavorite } = campersSlice.actions;
