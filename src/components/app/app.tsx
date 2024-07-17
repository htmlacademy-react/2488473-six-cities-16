import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Route path='/' element={<MainScreen />}/>
        <Route path='/login' element={<AuthProtect />}/>
        <Route path='/favorites' element={
          <PrivateRoute>
            <FavoriteScreen />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<OfferScreen />}/>
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
