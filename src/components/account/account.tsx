import { useAppSelector } from '../../hooks';
import { Link, Navigate } from 'react-router-dom';


function Account (): JSX.Element {
  const accountInfo = useAppSelector((state) => state.authorization);
  const favoritesLength = useAppSelector((state) => state.favorites.length);

  return accountInfo instanceof Object ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to='/favorites'>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ accountInfo.name }</span>
            <span className="header__favorite-count">{ favoritesLength }</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" onClick={() => <Navigate to='/login' />} href='/login'>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Account;
