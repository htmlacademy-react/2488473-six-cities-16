import { TOffer } from '../../types/global';
import { useAppSelector } from '../../hooks';

import { sortByPrice, sortByRating } from '../../utils/sort-funcs';

import Card from '../card/card';


type TCardsLayout = {
  cards: TOffer[];
  onPlaceHover: (placeName: TOffer| undefined) => void;
}

function CardsLayout ({ cards, onPlaceHover }: TCardsLayout): JSX.Element {
  const sortType = useAppSelector((state) => state.currentSort);

  let offers: TOffer[] = [];

  switch (sortType.toLowerCase()) {
    case 'price: low to high': 
      offers = sortByPrice(cards);
      break;
    case 'price: high to low':
      offers = sortByPrice(cards).reverse();
      break;
    case 'top rated first':
      offers = sortByRating(cards);
      break;
    default: // 'popular'
      offers = cards;
      break;
  }

  return (
    <div className='cities__places-list places__list tabs__content'>
      { offers.map((item) => <Card onPlaceHover={onPlaceHover} key={item.id} info={item} />) }
    </div>
  );
}

export default CardsLayout;
