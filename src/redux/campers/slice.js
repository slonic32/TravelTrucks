import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, perPage, toggleFavorite } from "./operations";

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
    favorite: false,
    page: 1,
    more: true,
  },
  reducers: {
    changeFavorite(state, action) {
      state.favorite = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    changeMore(state, action) {
      state.more = action.payload;
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
      .addCase(fetchCampers.rejected, handleRejected)
      //toggle favorite
      .addCase(toggleFavorite.pending, handlePending)
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.favorite) {
          const index = state.items.findIndex(
            obj => obj._id === action.payload._id
          );

          if (index !== -1) {
            state.items.splice(index, 1);
          }
        } else {
          state.items = state.items.map(obj =>
            obj._id === action.payload._id
              ? { ...obj, favorite: !obj.favorite }
              : obj
          );
        }
      })
      .addCase(toggleFavorite.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;

export const { changeFavorite, changePage, changeMore } = campersSlice.actions;
