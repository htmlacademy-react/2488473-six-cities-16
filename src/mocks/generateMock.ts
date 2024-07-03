import { TOffer, TCity, TReview } from '../types/global';

export function getRandomCard (): TOffer[] {
  return [
    {
      id: '1',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 12544,
      bedrooms: 4,
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
      type: 'house',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 8,
        }
      }
    },
    {
      id: '2',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 159444,
      bedrooms: 6,
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
      type: 'room',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
          zoom: 8,
        }
      }
    },
    {
      id: '3',
      photo: 'https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png',
      price: 1234,
      bedrooms: 1,
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
      type: 'hotel',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
          zoom: 8,
        }
      }
    },
    {
      id: '346',
      price: 5460,
      bedrooms: 12,
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
      type: 'apartment',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
          zoom: 8,
        }
      }
    }
  ];
}

export function getAmsterdam (): TCity {
  return ({
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  });
}

export function getRandomReviews (): TReview[] {
  return [{
    comment: 'good place, good emotion, good self',
    date: '2019-05-08T14:13:56.569Z',
    id: '1234',
    user: {
      avatarUrl: 'https://static2.tgstat.ru/channels/_0/c8/c8fcdb7e4656ff95aa29067c6ce4dc85.jpg',
      isPro: true,
      name: 'Max'
    },
    rating: 4
  }];
}
