import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
