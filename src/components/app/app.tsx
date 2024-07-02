import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthorizationStatus } from '../../const';

import AuthScreen from '../../pages/auth-screen';
import FavoriteScreen from '../../pages/favorite-screen';
import MainScreen from '../../pages/main-screen';
import OfferScreen from '../../pages/offer-screen';
import PrivateRoute from '../private-route/private-route';

type TApp = {
  cardCount: number;
};

function App ({ cardCount }: TApp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen cardCount={cardCount} />}/>
        <Route path='/login' element={<AuthScreen />}/>
        <Route path='/favorites' element={
          <PrivateRoute authorization={AuthorizationStatus.NoAuth}>
            <FavoriteScreen />
          </PrivateRoute>
        }/>
        <Route path='/offer/:id' element={<OfferScreen />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
