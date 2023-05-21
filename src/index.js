import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureAppStore from "./app/store";
import { Provider } from "react-redux";

const { store } = configureAppStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

