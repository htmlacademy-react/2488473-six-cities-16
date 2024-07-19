import { memo, useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';

import { TReview } from '../../../types/global';

import { toast } from 'react-toastify';
import { getToken } from '../../../service/token';

import ReviewForm from '../../forms/review-form';
import Review from '../../review/review';


function ReviewLayout ({ id }: { id: string | undefined }): JSX.Element {
  const [reviews, setReviews] = useState<TReview[] | null>(null);
  const accountInfo = useAppSelector((state) => state.authorization);

  useEffect(() => {
    fetch(`https://16.design.htmlacademy.pro/six-cities/comments/${id}`)
      .then((res) => res.json())
      .then((res: TReview[]) => setReviews(res));
  }, []);

  function handleSubmitButton (text: string, rate: number) {
    if (accountInfo instanceof Object) {
      fetch(`https://16.design.htmlacademy.pro/six-cities/comments/${id}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Token': getToken() }, body: JSON.stringify({rating: rate, comment: text})})
        .then((data) => data.status === 201 ? setReviews((state) => {
          const stateCopy = state?.slice();
          stateCopy?.unshift({
            comment: text,
            date: new Date().toJSON(),
            id: '14236879',
            rating: rate,
            user: {
              avatarUrl: accountInfo.avatarUrl,
              isPro: accountInfo.isPro,
              name: accountInfo.name
            }
          });

          return stateCopy || null;
        }) : toast('Не удалось отправить отзыв!', {type: 'error'}))
        .catch(() => toast('Не удалось отправить отзыв!', {type: 'error'}));
    }
  }

  return (
    <section className="offer__reviews reviews">
      {reviews instanceof Object ?
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length > 10 ? '10' : reviews.length}</span></h2>
          <ul className="reviews__list">
            {reviews
              .slice(0, 10)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((item) => <Review key={item.id} info={item} />)}
          </ul>
        </> : <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">0</span></h2>}
      { accountInfo instanceof Object && <ReviewForm submitForm={handleSubmitButton} />}
    </section>
  );
}

export default memo(ReviewLayout);
