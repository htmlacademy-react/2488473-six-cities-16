import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthenticatedProperties, State, TOffer } from '../types/global';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus } from '../const';
import { setAuth, setAuthLoading } from './slices/auth/auth.slice';
import { setOffers, setOffersLoading, toggleFavorites } from './slices/data/data.slice';
import { dropToken, setToken } from '../service/token';
import { Bounce, toast } from 'react-toastify';


type AsyncThunkPropWithAxios = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<void, undefined, AsyncThunkPropWithAxios>(
  'data/offers',
  async (_args, {dispatch, extra: api}) => {
    dispatch(setOffersLoading(true));
    const { data } = await api.get<TOffer[]>(ApiRoute.AllOffers);
    dispatch(setOffersLoading(false));
    dispatch(setOffers(data));
  }
);

export const fetchAuth = createAsyncThunk<void, undefined, AsyncThunkPropWithAxios>(
  'auth/checkAuth',
  async (_args, {dispatch, extra: api}) => {
    try {
      dispatch(setAuthLoading(true));
      const { data } = await api.get<AuthenticatedProperties>(ApiRoute.CheckAuth);

      dispatch(setAuth(data));
      setToken(data.token);

      const data1 = await api.get<TOffer[]>(ApiRoute.GetFavorites);
      data1.data.forEach((item: TOffer) => dispatch(toggleFavorites(item)));

    } catch {
      dispatch(setAuth(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(setAuthLoading(false));
    }
  }
);

export const fetchGetAuth = createAsyncThunk<void, {email: string; password: string}, AsyncThunkPropWithAxios>(
  'auth/getAuth',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      dispatch(setAuthLoading(true));
      const { data } = await api.post<AuthenticatedProperties>(ApiRoute.GetAuth, ({email: email, password: password}));
      dispatch(setAuth(data));
      setToken(data.token);
      const data1 = await api.get<TOffer[]>(ApiRoute.GetFavorites);
      data1.data.forEach((item: TOffer) => dispatch(toggleFavorites(item)));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      toast.error(err.response.data.details[0].messages[0] as string, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    } finally {
      dispatch(setAuthLoading(false));
    }
  }
);

export const fetchLogout = createAsyncThunk<void, undefined, AsyncThunkPropWithAxios>(
  'auth/logout',
  async (_args, {dispatch, extra: api}) => {
    try {
      setAuthLoading(true);
      await api.delete(ApiRoute.LogoutAuth);
      dispatch(setAuth(AuthorizationStatus.NoAuth));
    } catch (e){
      toast.error('Error when try to logout', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    } finally {
      setAuthLoading(false);
      dropToken();
    }
  }
);
