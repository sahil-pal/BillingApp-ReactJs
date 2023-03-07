import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ItemStore from './modules/billing/redux/ItemStore';
import reportWebVitals from './reportWebVitals';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ItemStore}>
    <BrowserRouter>
      <ReactNotifications />
      <App/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();