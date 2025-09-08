import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, perPage } from "./operations";

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
    more: true,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    changeMore(state, action) {
      state.more = action.payload;
    },
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
        if (state.page === 1) {
          state.items = action.payload.items;
          state.more = true;
        } else {
          state.items.push(...action.payload.items);
        }
        if (action.payload.total < perPage) {
          state.more = false;
        }
      })
      .addCase(fetchCampers.rejected, handleRejected);
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

export const { changePage, changeMore } = campersSlice.actions;
