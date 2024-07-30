import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../const';

import { TDataSlice } from '../../../types/state';
import { TOffer } from '../../../types/global';

import { fetchOffers } from '../../apiAction';


const initialState: TDataSlice = {
  offers: [],
  favorites: [],
  isOffersLoading: false,
};

export const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
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
  extraReducers (builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      });
  }
});

export const { toggleFavorites, clearFavorites } = dataSlice.actions;
