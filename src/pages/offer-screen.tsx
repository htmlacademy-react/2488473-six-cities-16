import { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFavorite from '../hooks/use-favorite';

import { TOffer, TOfferDetail } from '../types/global';

import Loader from '../components/loader/loader';
import Header from '../components/header/header';
import ReviewLayout from '../components/layouts/review-layout/review-layout';
import Map from '../components/map/map';
import Card from '../components/card/card';
import { AppRoute } from '../const';


function getFormatRate (rate: number) {
  const needFormat: boolean = Number.isInteger(rate);
  return needFormat ? `${rate}.0` : rate;
}

function InsideItem ({ text }: { text: string }) {
  return (
    <li className="offer__inside-item" style={{ textTransform: 'capitalize' }} key={text}>
      {text}
    </li>
  );
}

const MemoizedInsideItem = memo(InsideItem);

function OfferScreen (): JSX.Element {
  const [data, setData] = useState<TOfferDetail | undefined>();
  const [nearby, setNearby] = useState<TOffer[] | undefined>();

  const navigate = useNavigate();

  const { id } = useParams();

  const [isToggle, isDisabled, onClick] = useFavorite(data);

  useEffect(() => {
    fetch(`https://16.design.htmlacademy.pro/six-cities/offers/${id}`)
      .then((res) => res.status !== 200 ? navigate(AppRoute.Unknown, {replace: true}) : res.json())
      .then((res: TOfferDetail) => setData(res))
      .catch(() => navigate(AppRoute.Unknown, {replace: true}));
    fetch(`https://16.design.htmlacademy.pro/six-cities/offers/${id}/nearby`)
      .then((res) => res.status !== 200 ? navigate(AppRoute.Unknown, {replace: true}) : res.json())
      .then((res: TOffer[]) => setNearby(res))
      .catch(() => navigate(AppRoute.Unknown, {replace: true}));
  }, []);

  return data instanceof Object && nearby instanceof Object ? (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              { data.images.map((item: string) => <div className="offer__image-wrapper" key={item}><img className="offer__image" src={item} alt="Photo studio" /></div>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {data.isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {data.title}
                </h1>
                <button className={`offer__bookmark-button button ${isToggle && 'offer__bookmark-button--active'}`} type="button" onClick={() => typeof onClick === 'function' && onClick() } disabled={isDisabled as boolean}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.round(data.rating) * 20}%`}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{getFormatRate(data.rating)}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire" style={{ textTransform: 'capitalize' }}>
                  {data.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {data?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {data.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{data?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {data.goods.map((item) => <MemoizedInsideItem key={item} text={item}/>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper ${data.host.isPro && 'offer__avatar-wrapper--pro'}`}>
                    <img className="offer__avatar user__avatar" src={data.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {data.host.name}
                  </span>
                  {data.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {data.description}
                  </p>
                </div>
              </div>
              <ReviewLayout id={id}/>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={data.city} points={[data, ...nearby.slice(0, 3)]} selected={data} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearby.slice(0, 3).map((item) => <Card key={item.id} info={item} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (
    <Loader />
  );
}

export default OfferScreen;
