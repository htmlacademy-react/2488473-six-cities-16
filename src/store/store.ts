import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createApi } from '../service/api';


const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

export default store;
