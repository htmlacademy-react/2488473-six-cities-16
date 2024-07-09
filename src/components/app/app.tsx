import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthorizationStatus } from '../../const';

import FavoriteScreen from '../../pages/favorite-screen';
import MainScreen from '../../pages/main-screen';
import OfferScreen from '../../pages/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Logo from '../logo/logo';
import AuthProtect from '../auth-protect/auth-protect';


function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen />}/>
        <Route path='/login' element={<AuthProtect authorization={AuthorizationStatus.NoAuth} />}/>
        <Route path='/favorites' element={
          <PrivateRoute authorization={AuthorizationStatus.Auth}>
            <FavoriteScreen />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<OfferScreen authorization={AuthorizationStatus.NoAuth} />}/>
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
