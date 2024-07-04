import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TOffer, TReview } from '../../types/global';

import { AuthorizationStatus } from '../../const';

import FavoriteScreen from '../../pages/favorite-screen';
import MainScreen from '../../pages/main-screen';
import OfferScreen from '../../pages/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Logo from '../logo/logo';
import AuthProtect from '../auth-protect/auth-protect';

type TApp = {
  cards: TOffer[];
  reviews: TReview[];
};

function App ({ cards, reviews }: TApp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen cards={cards} />}/>
        <Route path='/login' element={<AuthProtect authorization={AuthorizationStatus.NoAuth} />}/>
        <Route path='/favorites' element={
          <PrivateRoute authorization={AuthorizationStatus.Auth}>
            <FavoriteScreen />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<OfferScreen reviews={reviews} authorization={AuthorizationStatus.NoAuth} />}/>
        <Route path='*' element={
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
