import { TOffer, TSortType } from '../../types/global';
import { useAppSelector } from '../../hooks';
import { memo } from 'react';

import { sortByPrice, sortByRating } from '../../utils';

import Card from '../card/card';
import { getCurrentSort } from '../../store/slices/main/main.selector';


type TCardsLayout = {
  cards: TOffer[];
  onPlaceHover: (placeName: TOffer | undefined) => void;
}


function getSortedOffers (sortType: TSortType, cards: TOffer[]) {
  switch (sortType.toLowerCase()) {
    case 'price: low to high':
      return sortByPrice(cards);
    case 'price: high to low':
      return sortByPrice(cards).reverse();
    case 'top rated first':
      return sortByRating(cards);
    default: // 'popular'
      return cards;
  }
}

function CardsLayout ({ cards, onPlaceHover }: TCardsLayout): JSX.Element {
  const sortType = useAppSelector(getCurrentSort);

  const offers = getSortedOffers(sortType, cards);

  return (
    <div className='cities__places-list places__list tabs__content'>
      { offers.map((item) => <Card onPlaceHover={onPlaceHover} key={item.id} info={item} />) }
    </div>
  );
}

export default memo(CardsLayout);
