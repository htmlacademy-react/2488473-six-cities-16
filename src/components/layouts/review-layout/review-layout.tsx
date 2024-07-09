import React from 'react';

import ReviewForm from '../../forms/review-form';
import Review from '../../review/review';

import { useAppSelector } from '../../../hooks';


function ReviewLayout (): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const reviewFormRequire = useAppSelector((state) => {
    if (state.authorization instanceof Object) {
      return <ReviewForm />;
    }
  });

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length > 10 ? '10' : reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews
          .slice(0, 10)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((item) => <Review key={item.comment} info={item} />)}
      </ul>

      { reviewFormRequire }
    </section>
  );
}

export default ReviewLayout;
