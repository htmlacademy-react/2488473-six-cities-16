import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const";
import { TDataSlice } from "../../../types/state";
import { TOffer } from "../../../types/global";


const initialState: TDataSlice = {
  offers: [],
  favorites: [],
  isOffersLoading: false,
}

export const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<TOffer[]>) => {
      state.offers = action.payload;
    },
    setOffersLoading: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    toggleFavorites: (state, action: PayloadAction<TOffer>) => {
      if (state.favorites.slice().filter((item) => item.id === action.payload.id).length === 0) {
        state.favorites = [...state.favorites, action.payload];
        return;
      }
      state.favorites = state.favorites.slice().filter((item) => item.id !== action.payload.id);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    }
  },
});

export const { setOffers, setOffersLoading, toggleFavorites, clearFavorites } = dataSlice.actions;
