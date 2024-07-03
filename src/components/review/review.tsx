import React from 'react';
import { TReview } from '../../types/global';

const MONTHS: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

type TReviewProps = {
  info: TReview;
}

function Review ({ info }: TReviewProps): JSX.Element {
  const dateTime = new Date(info.date);

  const year = dateTime.getFullYear();
  const month = MONTHS[dateTime.getMonth()];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={info.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {info.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${info.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {info.comment}
        </p>
        <time className="reviews__time">{`${month} ${year}`}</time>
      </div>
    </li>
  );
}


export default Review;
