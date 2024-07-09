import { createReducer } from '@reduxjs/toolkit';
import { setAuth, setCurrentCity } from './rootAction';
import { TCity, TOffer, TReview, AuthenticatedProperties } from '../types/global';
import { mockOffers, mockReviews } from '../mocks/generateMock';
import { AuthorizationStatus, CitiesLocations } from '../const';

type TInitialState = {
  currentCity: TCity;
  offers: TOffer[];
  favorites: TOffer[];
  reviews: TReview[];
  authorization: AuthorizationStatus.NoAuth | AuthenticatedProperties;
}


const initialState: TInitialState = {
  currentCity: CitiesLocations[0],
  offers: mockOffers,
  favorites: [],
  reviews: mockReviews,
  authorization: AuthorizationStatus.NoAuth,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setAuth, (state, action) => {
      state.authorization = action.payload;
    });
});

export default rootReducer;
