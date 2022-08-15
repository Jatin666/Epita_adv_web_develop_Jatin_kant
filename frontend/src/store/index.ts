/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { moviesApi } from 'services/api/movies';
import { authApi } from 'services/api/auth';
import moviesSlice from './slices/movies';
import authSlice from './slices/auth';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  movies: moviesSlice.reducer,
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware, authApi.middleware]),
});
