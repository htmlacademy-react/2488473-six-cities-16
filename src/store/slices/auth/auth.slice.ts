import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { AuthenticatedProperties } from '../../../types/global';
import { TAuthSlice } from '../../../types/state';


const initialState: TAuthSlice = {
  authorization: AuthorizationStatus.Unknown,
  isAuthLoading: false
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    setAuth (state, action: PayloadAction<AuthorizationStatus | AuthenticatedProperties>) {
      state.authorization = action.payload;
    },
    setAuthLoading (state, action: PayloadAction<boolean>) {
      state.isAuthLoading = action.payload;
    },
  }
});

export const { setAuth, setAuthLoading } = authSlice.actions;
