import { NameSpace } from '../../../const';
import { State, TOffer } from '../../../types/global';

export const getFavorites = (state: State): TOffer[] => state[NameSpace.Data].favorites;
export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;
export const getIsOffersLoading = (state: State): TOffer[] => state[NameSpace.Data].isOffersLoading;
