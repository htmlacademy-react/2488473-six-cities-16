import { useMemo, useState } from 'react';
import { useAppSelector } from '../hooks';

import { TOffer } from '../types/global';

import Loader from '../components/loader/loader';
import MainEmpty from '../components/main-empty/main-empty';
import CardsLayout from '../components/layouts/cards-layouts';
import Header from '../components/header/header';
import Filter from '../components/filter/filter';
import Sort from '../components/sort/sort';
import Map from '../components/map/map';
import { getOffers } from '../store/slices/data/data.selector';
import { getCurrentCity } from '../store/slices/main/main.selector';


function MainScreen (): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const currentCity = useAppSelector(getCurrentCity);
  const cards = useAppSelector(getOffers);
  const [selectedPoint, setSelectedPoint] = useState<TOffer | undefined>(undefined);

  const offers = useMemo(() => cards.filter((item) => item.city.name === currentCity.name), [cards, currentCity.name]);

  if (isOffersLoading) {
    return (<Loader />);
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Filter />
        <div className="cities">
          <div className={`cities__places-container container ${offers.length === 0 ? 'cities__places-container--empty' : ''}`}>
            { offers.length > 0 ?
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{ offers.length } places to stay in { currentCity.name }</b>
                  <Sort />
                  <CardsLayout onPlaceHover={ setSelectedPoint } cards={ offers } />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map" >
                    <Map selected={ selectedPoint } city={ currentCity } points={ offers } />
                  </section>
                </div>
              </> : <MainEmpty currentCity={currentCity} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
