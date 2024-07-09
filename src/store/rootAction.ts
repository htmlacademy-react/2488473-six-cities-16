import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AuthenticatedProperties, TCity } from '../types/global';


export const setCurrentCity = createAction<PrepareAction<TCity>>('main/setCity', (value: TCity) => ({payload: value}));

export const setAuth = createAction<PrepareAction<AuthenticatedProperties>>(
  'app/setAuth',
  (value: AuthenticatedProperties) => ({payload: value})
);
