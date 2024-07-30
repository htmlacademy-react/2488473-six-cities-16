import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { AuthenticatedProperties } from '../../../types/global';
import { TAuthSlice } from '../../../types/state';
import { fetchAuth, fetchGetAuth, fetchLogout } from '../../apiAction';
import { toast } from 'react-toastify';
import { dropToken, setToken } from '../../../service/token';


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
  },
  extraReducers (builder) {
    builder
      // logout
      .addCase(fetchLogout.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isAuthLoading = false;
        state.authorization = AuthorizationStatus.NoAuth;
        dropToken();
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.isAuthLoading = false;
        toast.error('Ошибка при завершении сессии!');
      })
      // getAuth
      .addCase(fetchGetAuth.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(fetchGetAuth.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.authorization = action.payload;
        setToken(action.payload.token);
      })
      .addCase(fetchGetAuth.rejected, (state) => {
        state.isAuthLoading = false;
        toast.error('Ошибка при авторизации!');
      })
      // fetchAuth
      .addCase(fetchAuth.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        state.authorization = action.payload;
        setToken(action.payload.token);
      });
  }
});

export const { setAuth, setAuthLoading } = authSlice.actions;
