import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/styleProductos.css';
import {RegistroApp} from './RegistroApp';
import {Provider} from 'react-redux';
import {store} from './store/store';



ReactDOM.render(

  <Provider store={store}>
    <RegistroApp />
  </Provider>,

  document.getElementById('root')
);

