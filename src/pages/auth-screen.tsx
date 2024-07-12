import { FormEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';

import Header from '../components/header/header';
import { fetchGetAuth } from '../store/apiAction';
import { CitiesLocations } from '../const';
import { getRandomInteger } from '../utils/index';
import { Link } from 'react-router-dom';
import { setCurrentCity } from '../store/rootAction';


const randomCity = CitiesLocations[getRandomInteger(0, CitiesLocations.length - 1)];

function AuthScreen (): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  function onSubmit (evt: FormEvent) {
    evt.preventDefault();
    dispatch(fetchGetAuth({email, password}));
  }

  return (
    <div className="page page--gray page--login">
      <Header showAccount={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" value={email} onInput={(evt: KeyboardEvent<HTMLInputElement>) => setEmail(evt.currentTarget.value)} name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" value={password} onInput={(evt: KeyboardEvent<HTMLInputElement>) => setPassword(evt.currentTarget.value)} name="password" minLength={1} placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" onClick={onSubmit} type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to='/' onClick={() => dispatch(setCurrentCity(randomCity))}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthScreen;
