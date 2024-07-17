import { FormEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';

import { fetchGetAuth } from '../../store/apiAction';


function AuthForm (): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  function onSubmit (evt: FormEvent) {
    evt.preventDefault();
    dispatch(fetchGetAuth({email, password}));
  }

  return (
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
  );
}

export default AuthForm;
