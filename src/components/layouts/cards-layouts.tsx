import { TOffer } from '../../types/global';

import Card from '../card/card';


type TCardsLayout = {
  cards: TOffer[];
  onPlaceHover: (placeName: TOffer| undefined) => void;
}

function CardsLayout ({ cards, onPlaceHover }: TCardsLayout): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      { cards.map((item) => <Card onPlaceHover={onPlaceHover} key={item.id} info={item} />) }
    </div>
  );
}

export default CardsLayout;
