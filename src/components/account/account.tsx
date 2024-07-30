import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLogout } from '../../store/apiAction';

import { Link, Navigate } from 'react-router-dom';
import { memo } from 'react';

import { getAuthorization } from '../../store/slices/auth/auth.selector';
import { getFavorites } from '../../store/slices/data/data.selector';


function Account (): JSX.Element {
  const accountInfo = useAppSelector(getAuthorization);
  const favoritesLength = useAppSelector(getFavorites).length;

  const dispatch = useAppDispatch();

  const onClickButton = () => {
    dispatch(fetchLogout());
  };

  return accountInfo instanceof Object ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to='/favorites'>
            <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${accountInfo.avatarUrl})`, borderRadius: '50%' }}>
            </div>
            <span className="header__user-name user__name">{ accountInfo.name }</span>
            <span className="header__favorite-count">{ favoritesLength }</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#" onClick={onClickButton}>
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

export default memo(Account);
