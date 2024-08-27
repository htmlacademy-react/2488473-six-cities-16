import { useAppSelector } from '../hooks';

import { TOffer, TOfferDetail } from '../types/global';

import Header from '../components/header/header';
import { Link } from 'react-router-dom';
import FavoriteLayout from '../components/layouts/favorite-layout/favorite-layout';
import FavoritesEmpty from '../components/favorites-empty/favorites-empty';
import { getFavorites } from '../store/slices/data/data.selector';


type TAllOffers = (TOffer | TOfferDetail)[];
type TResultFilter = {
  Paris?: TAllOffers;
  Cologne?: TAllOffers;
  Brussels?: TAllOffers;
  Amsterdam?: TAllOffers;
  Hamburg?: TAllOffers;
  Dusseldorf?: TAllOffers;
}

function getFilteredOffers (allOffers: TAllOffers): TResultFilter {
  const result: TResultFilter = {};

  allOffers.forEach((item) => {
    if (Object.keys(result).includes(item.city.name)) {
      const prev = result[item.city.name] as TAllOffers;
      result[item.city.name] = [...prev, item];
    } else {
      result[item.city.name] = [item];
    }
  });

  return result;
}

function FavoriteScreen (): JSX.Element {

  const favorites: TAllOffers = useAppSelector(getFavorites);
  const filteredOffers = getFilteredOffers(favorites);

  const isFavoritesNull = favorites.length === 0;

  return (
    <div className={`page ${ isFavoritesNull && 'page--favorites-empty' }`} style={{ minHeight: '100vh' }}>
      <Header />

      <main className={`page__main page__main--favorites ${ isFavoritesNull && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoritesNull && 'favorites--empty'}`}>
            {favorites.length > 0 ?
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.keys(filteredOffers).map((key) => <FavoriteLayout key={key} name={key} offers={filteredOffers[key as keyof TResultFilter]} />)}
                </ul>
              </> : <FavoritesEmpty />}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="header__logo-link" to={'/'}>
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoriteScreen;
