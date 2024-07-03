type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
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
  host: Host;
  photo: string;
  city: string;
};
