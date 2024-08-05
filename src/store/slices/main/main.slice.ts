import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CitiesLocations, NameSpace } from '../../../const';
import { TMainSlice } from '../../../types/state';

import { TCity, TSortType } from '../../../types/global';


const initialState: TMainSlice = {
  currentCity: CitiesLocations[0],
  currentSort: 'popular'
};


export const mainSlice = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setCurrentCity (state, action: PayloadAction<TCity>) {
      state.currentCity = action.payload;
    },
    setCurrentSort (state, action: PayloadAction<TSortType>) {
      state.currentSort = action.payload;
    }
  }
});

export const { setCurrentCity, setCurrentSort } = mainSlice.actions;
