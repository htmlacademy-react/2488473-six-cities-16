import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AuthenticatedProperties, TCity, TOffer, TSortType } from '../types/global';


export const setCurrentCity = createAction<PrepareAction<TCity>>('main/setCity', (value: TCity) => ({payload: value}));

export const setSort = createAction<PrepareAction<TSortType>>('main/setSort', (value: TSortType) => ({payload: value}));

export const setAuth = createAction<PrepareAction<AuthenticatedProperties>>(
  'app/setAuth',
  (value: AuthenticatedProperties) => ({payload: value})
);

export const setOffers = createAction<PrepareAction<TOffer[]>>('data/setOffers', (value: TOffer[]) => ({payload: value}));

export const setOffersLoading = createAction<PrepareAction<boolean>>('data/setOffersLoading', (value: boolean) => ({payload: value}));

export const toggleFavorites = createAction<PrepareAction<TOffer>>('data/toggleFavorites', (value: TOffer) => ({payload: value}));

export const setAuthLoading = createAction<PrepareAction<boolean>>('auth/setAuthLoading', (value: boolean) => ({payload: value}));

export const clearFavorites = createAction('data/clearFavorites');
