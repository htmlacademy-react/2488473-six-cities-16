import { AuthorizationStatus } from '../const';
import { AuthenticatedProperties, TCity, TOffer, TSortType } from './global';


export type TDataSlice = {
  offers: TOffer[];
  favorites: TOffer[];
  isOffersLoading: boolean;
}

export type TAuthSlice = {
  authorization: AuthorizationStatus | AuthenticatedProperties;
  isAuthLoading: boolean;
};

export type TMainSlice = {
  currentCity: TCity;
  currentSort: TSortType;
}
