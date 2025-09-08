import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    options: [],
    type: "",
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
  },
});

const filterPersistConfig = {
  key: "filter",
  storage,
  whitelist: ["location", "options", "type"],
};

const persistedReducer = persistReducer(
  filterPersistConfig,
  filtersSlice.reducer
);
export const filtersReducer = persistedReducer;

export const {
  changeLocation,
  setOptions,

  changeType,
} = filtersSlice.actions;
