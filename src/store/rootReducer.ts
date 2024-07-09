import { createReducer } from '@reduxjs/toolkit';

import { TCity, TOffer, TReview, AuthenticatedProperties, TSortType } from '../types/global';
import { AuthorizationStatus, CitiesLocations } from '../const';

import { setAuth, setCurrentCity, setSort } from './rootAction';
import { mockOffers, mockReviews } from '../mocks/generateMock';

type TInitialState = {
  currentCity: TCity;
  offers: TOffer[];
  favorites: TOffer[];
  reviews: TReview[];
  currentSort: TSortType;
  authorization: AuthorizationStatus.NoAuth | AuthenticatedProperties;
}


const initialState: TInitialState = {
  currentCity: CitiesLocations[0],
  offers: mockOffers,
  favorites: [],
  reviews: mockReviews,
  currentSort: 'popular',
  authorization: {
    email: 'x6modee@gmail.com',
    token: 'eDZtb2RlZUBnbWFpbC5jb20=',
    name: 'x6modee',
    avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
    isPro: false
  },
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
    });
});

export default rootReducer;
