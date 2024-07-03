import { TOffer } from '../../types/global';

import Card from '../card/card';


type TCardsLayout = {
  cards: TOffer[];
}

function CardsLayout ({ cards }: TCardsLayout): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      { cards.map((item) => <Card key={item.id} info={item} />) }
    </div>
  );
}

export default CardsLayout;
