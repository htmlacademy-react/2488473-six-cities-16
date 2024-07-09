import store from '../store/store';

type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TLocation = {
  latitude: number;
  longitude:number;
  zoom: number;
}

export type TCity = {
  name: TCityName;
  location: TLocation;
}

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TOffer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthenticatedProperties = {
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
