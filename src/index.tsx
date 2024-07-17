import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { getRandomCard, getRandomReviews } from './mocks/generateMock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cards={getRandomCard()}
      reviews={getRandomReviews()}
    />
  </React.StrictMode>
);

