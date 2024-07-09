import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AuthenticatedProperties, TCity, TSortType } from '../types/global';


export const setCurrentCity = createAction<PrepareAction<TCity>>('main/setCity', (value: TCity) => ({payload: value}));

export const setAuth = createAction<PrepareAction<AuthenticatedProperties>>(
  'app/setAuth',
  (value: AuthenticatedProperties) => ({payload: value})
);

export const setSort = createAction<PrepareAction<TSortType>>('main/setSort', (value: TSortType) => ({payload: value}));
