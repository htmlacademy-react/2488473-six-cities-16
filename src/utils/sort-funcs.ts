import { TOffer } from '../types/global';


export function sortByRating (offers: TOffer[]) {
  return offers.slice().sort((a, b): number => b.rating - a.rating);
}

export function sortByPrice (offers: TOffer[]) { // !! sort by price only, use [].reverse() for high to low !!
  return offers.slice().sort((a, b): number => a.price - b.price);
}
