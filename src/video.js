import './index.less';
import "babel-polyfill";
import 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import VideoApp from './VideoApp';
import {Provider} from 'react-redux';
import rootSaga from './sagas';
import configureStore from './store/configureStore';

if (process.env.NODE_ENV === 'development') {
  console.log(`%cVideo-Page-${process.env.NODE_ENV}`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
}

const store = configureStore();
store.runSaga(rootSaga);
const root = document.getElementById('root');



render(
  <Provider store={store}>
    <VideoApp />
  </Provider>, root);
