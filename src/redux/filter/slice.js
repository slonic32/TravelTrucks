import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    wc: false,
    type: "",
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeAc(state, action) {
      state.ac = action.payload;
    },
    changeAutomatic(state, action) {
      state.automatic = action.payload;
    },
    changeKitchen(state, action) {
      state.kitchen = action.payload;
    },
    changeTv(state, action) {
      state.tv = action.payload;
    },
    changeWc(state, action) {
      state.wc = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
});

const filterPersistConfig = {
  key: "filter",
  storage,
  whitelist: ["location", "ac", "automatic", "kitchen", "tv", "wc", "type"],
};

const persistedReducer = persistReducer(
  filterPersistConfig,
  filtersSlice.reducer
);
export const filtersReducer = persistedReducer;

export const {
  changeLocation,
  changeAc,
  changeAutomatic,
  changeKitchen,
  changeTv,
  changeWc,
  changeType,
  changeFavorite,
} = filtersSlice.actions;
