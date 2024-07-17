import { useEffect } from 'react';
import { TOffer } from '../types/global';
import { useLocation } from 'react-router-dom';


export function sortByRating (offers: TOffer[]) {
  return offers.slice().sort((a, b): number => b.rating - a.rating);
}

export function sortByPrice (offers: TOffer[]) { // !! sort by price only, use [].reverse() for high to low !!
  return offers.slice().sort((a, b): number => a.price - b.price);
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
