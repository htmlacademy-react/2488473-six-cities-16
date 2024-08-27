import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store';
import { fetchAuth, fetchOffers } from './store/apiAction';

import App from './components/app/app';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffers());
store.dispatch(fetchAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable={false} theme={'dark'} transition={Bounce} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// enter point
