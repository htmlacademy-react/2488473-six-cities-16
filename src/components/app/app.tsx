import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Offer } from '../../types/offer';

import { AuthorizationStatus } from '../../const';

import AuthScreen from '../../pages/auth-screen';
import FavoriteScreen from '../../pages/favorite-screen';
import MainScreen from '../../pages/main-screen';
import OfferScreen from '../../pages/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Logo from '../logo/logo';

type TApp = {
  cards: Offer[];
};

function App ({ cards }: TApp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen cards={cards} />}/>
        <Route path='/login' element={<AuthScreen />}/>
        <Route path='/favorites' element={
          <PrivateRoute authorization={AuthorizationStatus.Auth}>
            <FavoriteScreen />
          </PrivateRoute>
        }/>
        <Route path='/offer/:id' element={<OfferScreen authorization={AuthorizationStatus.Auth} />}/>
        <Route path='*' element={
          <>
            <h1>404</h1>
            <Logo />
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
