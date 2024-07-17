import { useState } from 'react';
import { useAppSelector } from '../hooks';

import { TOffer } from '../types/global';

import Map from '../components/map/map';
import Loader from '../components/loader/loader';
import CardsLayout from '../components/layouts/cards-layouts';
import Header from '../components/header/header';
import Filter from '../components/filter/filter';
import Sort from '../components/sort/sort';


function MainScreen (): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers.filter((item) => item.city.name === state.currentCity.name));
  const [selectedPoint, setSelectedPoint] = useState<TOffer | undefined>(undefined);

  if (isOffersLoading) {
    return (<Loader />);
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
