import { CitiesLocations } from '../const';
import { setCurrentCity } from '../store/rootAction';
import { getRandomInteger } from '../utils/index';
import { useAppDispatch } from '../hooks';

import Header from '../components/header/header';
import AuthForm from '../components/forms/auth-form';
import { Link } from 'react-router-dom';


const randomCity = CitiesLocations[getRandomInteger(0, CitiesLocations.length - 1)];

function AuthScreen (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--login">
      <Header showAccount={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <AuthForm />
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
