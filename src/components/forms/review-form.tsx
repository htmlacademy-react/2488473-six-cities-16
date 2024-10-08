import { ChangeEvent, useState } from 'react';


type TReviewForm = {
  submitForm: (text: string, rate: number) => void;
}


function getIsDisabled (text: string, rate: number) {
  if (text.length > 49 && text.length < 301 && rate > 0) {
    return false;
  }
  return true;
}

function ReviewForm ({ submitForm }: TReviewForm): JSX.Element {
  const [rate, setRate] = useState<number>(0);
  const [text, setText] = useState<string>('');

  function updateRate (evt: ChangeEvent<HTMLInputElement>) {
    const index = +evt.target.value;
    setRate(index);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={(evt) => updateRate(evt)} checked={rate === 5}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={(evt) => updateRate(evt)} checked={rate === 4}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={(evt) => updateRate(evt)} checked={rate === 3}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={(evt) => updateRate(evt)} checked={rate === 2}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={(evt) => updateRate(evt)} checked={rate === 1}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => setText(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" onClick={(evt: React.FormEvent<HTMLButtonElement>) => {
          evt.preventDefault();
          submitForm(text, rate);
          setRate(0);
          setText('');
        }} disabled={getIsDisabled(text, rate)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
