import { toggleFavorites } from '../store/rootAction';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { useNavigate } from 'react-router-dom';

import { TOffer, TOfferDetail } from '../types/global';


type TFavoriteProp = TOffer | TOfferDetail | undefined;

function useFavorite (offer: TFavoriteProp) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const previewImage = useAppSelector((state) => state.offers.find((item) => item.id === offer?.id)?.previewImage);

  const isAuth = useAppSelector((state) => state.authorization);
  const isFavorite = useAppSelector((state) => state
    .favorites
    .filter((item) => item.id === offer?.id).length > 0
  );

  const [isToggle, setToggle] = useState<boolean>(isFavorite);

  useEffect(() => {
    setToggle(isFavorite);
  }, [isFavorite]);


  function handleButtonClick (): void {
    if (isAuth instanceof Object) {
      dispatch(toggleFavorites({
        id: offer?.id,
        title: offer?.title,
        type: offer?.type,
        price: offer?.price,
        previewImage,
        city: offer?.city,
        location: offer?.location,
        isFavorite: offer?.isFavorite,
        isPremium: offer?.isPremium,
        rating: offer?.rating
      }));
      setToggle((prev) => !prev);
      return;
    }
    navigate('/login');
  }

  return [isToggle, handleButtonClick];
}

export default useFavorite;
