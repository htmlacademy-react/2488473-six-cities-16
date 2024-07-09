import React, { useState } from 'react';
import { TOffer } from '../../types/global';

import { Link } from 'react-router-dom';

type TCard = {
  info: TOffer;
  onPlaceHover: (placeName: TOffer | undefined) => void;
}

function Card ({ info, onPlaceHover }: TCard): JSX.Element {
  const [isFavorite, setFavorite] = useState<boolean>(info.isFavorite);

  return (
    <div
      className="cities__card place-card"
      onMouseEnter={() => onPlaceHover(info)}
    >
      {info.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={info.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{info.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button" onClick={() => setFavorite((state) => !state)}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${info.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${info.id}`}>{info.title}</Link>
        </h2>
        <p className="place-card__type">{info.type}</p>
      </div>
    </div>
  );
}

export default Card;
