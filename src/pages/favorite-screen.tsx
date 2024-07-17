import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import FavoriteLayout from '../components/layouts/favorite-layout/favorite-layout';
import { TOffer, TOfferDetail } from '../types/global';
import { useAppSelector } from '../hooks';


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

  const favorites: TAllOffers = useAppSelector((state) => state.favorites);
  const filteredOffers = getFilteredOffers(favorites);

  return (
    <div className="page" style={{ minHeight: '100vh' }}>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(filteredOffers).map((key) => <FavoriteLayout key={key} name={key} offers={filteredOffers[key as keyof TResultFilter]} />)}
            </ul>
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
