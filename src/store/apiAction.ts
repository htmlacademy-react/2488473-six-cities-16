import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthenticatedProperties, State, TOffer } from '../types/global';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { clearFavorites, toggleFavorites } from './slices/data/data.slice';
import { setToken } from '../service/token';

const GREAT_CODES = [201, 204, 200, 304];

type TAsyncThunkPropWithExtra = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<TOffer[], undefined, TAsyncThunkPropWithExtra>(
  'data/offers',
  async (_args, {extra: api}) => {
    const { data } = await api.get<TOffer[]>(ApiRoute.AllOffers);
    return data;
  }
);

// for localStorage token
export const fetchAuth = createAsyncThunk<AuthenticatedProperties, undefined, TAsyncThunkPropWithExtra>(
  'auth/checkAuth',
  async (_args, {dispatch, extra: api}) => {
    const { data, status } = await api.get<AuthenticatedProperties>(ApiRoute.CheckAuth);

    if (GREAT_CODES.includes(status)) {
      const data1 = await api.get<TOffer[]>(ApiRoute.GetFavorites, { headers: {'X-Token': data.token} });
      data1.data.forEach((item: TOffer) => dispatch(toggleFavorites(item)));
    }

    return data;
  }
);

export const fetchGetAuth = createAsyncThunk<AuthenticatedProperties, {email: string; password: string}, TAsyncThunkPropWithExtra>(
  'auth/getAuth',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data, status } = await api.post<AuthenticatedProperties>(ApiRoute.GetAuth, ({email: email, password: password}));
    setToken(data.token);

    if (GREAT_CODES.includes(status)) {
      const data1 = await api.get<TOffer[]>(ApiRoute.GetFavorites);
      data1.data.forEach((item: TOffer) => dispatch(toggleFavorites(item)));
    }

    return data;
  }
);

export const fetchLogout = createAsyncThunk<void, undefined, TAsyncThunkPropWithExtra>(
  'auth/logout',
  async (_args, { dispatch, extra: api}) => {
    const { status } = await api.get(ApiRoute.LogoutAuth, { method: 'delete' });

    if (GREAT_CODES.includes(status)) {
      dispatch(clearFavorites());
    }
  }
);
