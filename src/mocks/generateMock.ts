import { Offer } from '../types/offer';

export function getRandomCard (): Offer[] {
  return [
    {
      id: '1',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 12544,
      bedrooms: 4,
      city: 'Amsterdam',
      description: 'Good place to have dinner with coffee',
      host: {
        avatarUrl: 'https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg',
        isPro: true,
        name: 'Company Shutter'
      },
      isFavorite: true,
      isPremium: false,
      maxAdults: 3,
      rating: 5,
      title: 'Place with monkey',
      type: 'house'
    },
    {
      id: '2',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 159444,
      bedrooms: 6,
      city: 'Chinese',
      description: 'Place with very strong policy in country',
      host: {
        avatarUrl: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
        isPro: false,
        name: 'COmputer Apple inc'
      },
      isFavorite: false,
      isPremium: true,
      maxAdults: 1,
      rating: 4,
      title: 'Very exhausted place',
      type: 'room'
    },
    {
      id: '3',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 1234,
      bedrooms: 1,
      city: 'Australia',
      description: 'Very dikoe mesto v glubinax junglei, ochen',
      host: {
        avatarUrl: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
        isPro: true,
        name: 'Australia hotel provaider'
      },
      isFavorite: true,
      isPremium: false,
      maxAdults: 1,
      rating: 1,
      title: 'Neveriyatnoe mesto',
      type: 'hotel'
    },
    {
      id: '346',
      price: 5460,
      bedrooms: 12,
      city: 'Chaina',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      description: 'Very dangeours moment in your life',
      host: {
        avatarUrl: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
        isPro: true,
        name: 'COmputer Apple inc'
      },
      isFavorite: false,
      isPremium: false,
      maxAdults: 6,
      rating: 5,
      title: 'Get emotion',
      type: 'apartment'
    },
    {
      id: '35',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 4794,
      bedrooms: 7,
      city: 'Australia',
      description: 'Very dikoe mesto v glubinax junglei, ochen',
      host: {
        avatarUrl: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
        isPro: true,
        name: 'Bad provaider'
      },
      isFavorite: false,
      isPremium: true,
      maxAdults: 4,
      rating: 1,
      title: 'Neveriyatnoe mesto',
      type: 'hotel'
    }
  ];
}
