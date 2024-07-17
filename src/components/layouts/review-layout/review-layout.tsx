import React from 'react';

import { AuthorizationStatus } from '../../../const';
import { TReview } from '../../../types/global';

import ReviewForm from '../../forms/review-form';
import Review from '../../review/review';


type TReviewLayout = {
  reviews: TReview[];
  authorization: AuthorizationStatus;
}

function ReviewLayout ({ reviews, authorization }: TReviewLayout): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length > 10 ? '10' : reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews
          .slice(0, 10)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((item) => <Review key={item.comment} info={item} />)}
      </ul>

      { authorization === AuthorizationStatus.Auth ? <ReviewForm /> : null }
    </section>
  );
}

export default ReviewLayout;
