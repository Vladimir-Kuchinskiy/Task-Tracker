import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
