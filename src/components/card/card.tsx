import { memo } from 'react';

import { TOffer } from '../../types/global';

import { Link } from 'react-router-dom';
import useFavorite from '../../hooks/use-favorite';

type TCard = {
  info: TOffer;
  onPlaceHover?: (placeName: TOffer | undefined) => void;
  small?: boolean;
}

function Card ({ info, onPlaceHover, small }: TCard): JSX.Element {
  console.log(info);
  
  const [isToggle, isDisabled, onClick] = useFavorite(info);

  return (
    <div
      className={`${small ? 'favorites__card place-card' : 'cities__card'} place-card`}
      onMouseEnter={() => typeof onPlaceHover === 'function' ? onPlaceHover(info) : null}
    >
      {info.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${small ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${info.id}`} state={{previewImage: info.previewImage}}>
          <img className="place-card__image" src={info.previewImage} width={small ? '150' : '260'} height={small ? '110' : '200'} alt="Place image" />
        </Link>
      </div>
      <div className={`${small ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{info.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isToggle ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={() => typeof onClick === 'function' && onClick()} disabled={isDisabled as boolean}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(info.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${info.id}`} state={{previewImage: info.previewImage}}>{info.title}</Link>
        </h2>
        <p className="place-card__type" style={{ textTransform: 'capitalize' }}>{info.type}</p>
      </div>
    </div>
  );
}

export default memo(Card);
