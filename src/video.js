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
import myStorage from './utils/myStorage';
import {getCookie} from 'utils/myCookie';

if (process.env.NODE_ENV === 'development') {
  console.log(`%c${process.env.NODE_ENV}`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
}



let user = {}
const TICKET = getCookie('ticket');
if(TICKET&&myStorage.getItem('user')){
  user=JSON.parse(myStorage.getItem('user'));
}
const initalState = {
  user:user
}
const store = configureStore(initalState);
store.runSaga(rootSaga);
const root = document.getElementById('root');



render(
  <Provider store={store}>
    <VideoApp />
  </Provider>, root);
