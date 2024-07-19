import { createReducer } from '@reduxjs/toolkit';

import { TCity, TOffer, TReview, AuthenticatedProperties, TSortType } from '../types/global';
import { AuthorizationStatus, CitiesLocations } from '../const';

import { setAuth, setCurrentCity, toggleFavorites, setOffers, setOffersLoading, setSort, setAuthLoading, clearFavorites } from './rootAction';


type TInitialState = {
  currentCity: TCity;
  offers: TOffer[];
  favorites: TOffer[];
  reviews: TReview[];
  currentSort: TSortType;
  authorization: AuthorizationStatus | AuthenticatedProperties;
  isOffersLoading: boolean;
  isAuthLoading: boolean;
}


const initialState: TInitialState = {
  currentCity: CitiesLocations[0],
  offers: [],
  favorites: [],
  reviews: [],
  currentSort: 'popular',
  authorization: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  isAuthLoading: false,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(toggleFavorites, (state, action) => {
      if (state.favorites.slice().filter((item) => item.id === action.payload.id).length === 0) {
        state.favorites = [...state.favorites, action.payload];
        return;
      }
      state.favorites = state.favorites.slice().filter((item) => item.id !== action.payload.id);
    })
    .addCase(setAuthLoading, (state, action) => {
      state.isAuthLoading = action.payload;
    })
    .addCase(clearFavorites, (state, action) => {
      state.favorites = [];
    });
});

export default rootReducer;
