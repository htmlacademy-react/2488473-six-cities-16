import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TOfferDetail } from '../types/global';

import Header from '../components/header/header';
import ReviewLayout from '../components/layouts/review-layout/review-layout';
import Loader from '../components/loader/loader';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleFavorites } from '../store/rootAction';


function getFormatRate (rate: number) {
  const needFormat: boolean = Number.isInteger(rate);
  return needFormat ? `${rate}.0` : rate;
}

function InsideItem ({ text }: { text: string }) {
  return (
    <li className="offer__inside-item" style={{ textTransform: 'capitalize' }}>
      {text}
    </li>
  );
}

function OfferScreen (): JSX.Element {
  const [data, setData] = useState<TOfferDetail>();
  const offer = data instanceof Object ? data : null;

  const { id } = useParams();

  const isAuth = useAppSelector((state) => state.authorization);
  const isFavorite = useAppSelector((state) => state.favorites.filter((item) => item.id === offer?.id).length > 0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isToggle, setToggle] = useState<boolean>(isFavorite);

  useEffect(() => {
    setToggle(isFavorite);
  }, [isFavorite]);

  function handleClickButton (): void {
    if (isAuth instanceof Object) {
      dispatch(toggleFavorites(offer));
      setToggle((prev) => !prev);
      return;
    }
    navigate('/login');
  }

  useEffect(() => {
    fetch(`https://16.design.htmlacademy.pro/six-cities/offers/${id}`)
      .then((res) => res.status === 404 ? navigate('/') : res.json())
      .then((res: TOfferDetail) => setData(res))
      .catch(() => navigate('/'));
  }, []);

  return data instanceof Object ? (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {data.isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {data.title}
                </h1>
                <button className={`offer__bookmark-button button ${isToggle && 'offer__bookmark-button--active'}`} type="button" onClick={() => typeof handleClickButton === 'function' && handleClickButton()}>
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
                  {(data?.type) || 'Неудача'}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {(data?.bedrooms) || 'Неудача'} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {(data?.maxAdults) || 'Неудача'} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{data?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {data?.goods.map((item) => <InsideItem key={item} text={item}/>)}
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
            {/* <Map city={getAmsterdam()} points={getRandomCard().slice(0, 3)} selected={undefined}/> */}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '100%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
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
