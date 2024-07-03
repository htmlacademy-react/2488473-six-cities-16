type THost = {
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
  name: string;
  location: TLocation;
}

export type TOffer = {
  id: string;
  price: number;
  title: string;
  description: string;
  rating: number;
  bedrooms: number;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  host: THost;
  photo: string;
  city: TCity;
};
