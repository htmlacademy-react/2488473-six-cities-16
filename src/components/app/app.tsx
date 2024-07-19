import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../const';

import MainScreen from '../../pages/main-screen';
import FavoriteScreen from '../../pages/favorite-screen';
import OfferScreen from '../../pages/offer-screen';

import AuthProtect from '../auth-protect/auth-protect';
import PrivateRoute from '../private-route/private-route';
import Logo from '../logo/logo';
import ScrollToTop from '../../utils';


function App (): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />}/>
        <Route path={AppRoute.Login} element={<AuthProtect />}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoriteScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />}/>
        <Route path={AppRoute.Unknown} element={
          <>
            <h1>404</h1>
            <Logo />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
