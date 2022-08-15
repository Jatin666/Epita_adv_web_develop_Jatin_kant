/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'styles/index.css';
import ReactDOM from 'react-dom';
import {
  persistStore,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'store';
import { Provider } from 'react-redux';
import 'tw-elements';
import App from 'pages';

const persistor = persistStore(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
