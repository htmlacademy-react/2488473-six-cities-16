import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { TOffer, TOfferDetail } from '../../../types/global';
import Card from '../../card/card';
import { setCurrentCity } from '../../../store/rootAction';
import { CitiesLocations } from '../../../const';


type TFavoriteLayout = {
  name: string;
  offers: (TOfferDetail | TOffer)[] | undefined;
}

function FavoriteLayout ({ name, offers }: TFavoriteLayout): JSX.Element {
  const dispatch = useAppDispatch();

  return typeof offers !== 'undefined' ? (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link className='locations__item-link' to='/' onClick={() => dispatch(setCurrentCity(CitiesLocations.filter((item) => item.name === name)[0]))}>
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.map((item) => <Card key={item.id} info={{...item, isFavorite: true}} small />)}
      </div>
    </li>
  ) : <div></div>;
}

export default FavoriteLayout;
