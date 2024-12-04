import { createStore } from 'redux';
import rootReducer from './index';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const loggerMiddleware = store => next => action => {
    return next(action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  });

// const store = createStore(rootReducer);

export default store;