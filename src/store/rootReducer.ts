import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

import { mainSlice } from './slices/main/main.slice';
import { dataSlice } from './slices/data/data.slice';
import { authSlice } from './slices/auth/auth.slice';

const rootReducer = combineReducers({
  [NameSpace.Main]: mainSlice.reducer,
  [NameSpace.Data]: dataSlice.reducer,
  [NameSpace.Auth]: authSlice.reducer,
});

export default rootReducer;
