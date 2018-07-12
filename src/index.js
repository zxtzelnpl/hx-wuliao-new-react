import './index.less';
import './common/less/font-awesome.less';
import "babel-polyfill";
import 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import rootSaga from './sagas';
import configureStore from './store/configureStore';
import myStorage from './utils/myStorage';

if (process.env.NODE_ENV === 'development') {
  console.log(`%c${process.env.NODE_ENV}`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
  // console.log(`%c${process.env.NODE_ENV}`, 'background:yellow;font-size:2em;color:#00CC66;font-weight:bold;');
  // console.log(`%c$Mark`, 'background:yellow;font-size:2em;color:#00CC66;font-weight:bold;');
}



let user = {}
if(myStorage.getItem('user')){
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
      <ConnectedRouter
          history={store.history}
      >
        <App/>
      </ConnectedRouter>
    </Provider>, root);
