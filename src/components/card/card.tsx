import { TOffer } from '../../types/global';

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavorites } from '../../store/rootAction';
import { useEffect, useState } from 'react';

type TCard = {
  info: TOffer;
  onPlaceHover?: (placeName: TOffer | undefined) => void;
  small?: boolean;
}

function Card ({ info, onPlaceHover, small }: TCard): JSX.Element {

  const isAuth = useAppSelector((state) => state.authorization);
  const isFavorite = useAppSelector((state) => state.favorites.filter((item) => item.id === info.id).length > 0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isToggle, setToggle] = useState<boolean>(isFavorite);

  useEffect(() => {
    setToggle(isFavorite);
  }, [isFavorite]);

  function handleClickButton (): void {
    if (isAuth instanceof Object) {
      dispatch(toggleFavorites(info));
      setToggle((prev) => !prev);
      return;
    }
    navigate('/login');
  }

  return (
    <div
      className={`${small ? 'favorites__card place-card' : 'cities__card'} place-card`}
      onMouseEnter={() => typeof onPlaceHover === 'function' ? onPlaceHover(info) : null}
    >
      {info.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${small ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${info.id}`}>
          <img className="place-card__image" src={info.previewImage} width={small ? '150' : '260'} height={small ? '110' : '200'} alt="Place image" />
        </Link>
      </div>
      <div className={`${small ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{info.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isToggle ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={() => typeof handleClickButton === 'function' && handleClickButton()}>
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
          <Link to={`/offer/${info.id}`}>{info.title}</Link>
        </h2>
        <p className="place-card__type" style={{ textTransform: 'capitalize' }}>{info.type}</p>
      </div>
    </div>
  );
}

export default Card;
