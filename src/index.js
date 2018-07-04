import './index.less';
import "babel-polyfill";
import 'es6-promise';
import 'whatwg-fetch';

if(process.env.NODE_ENV==='development'){
  console.log(`%c${process.env.NODE_ENV}`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
  // console.log(`%c${process.env.NODE_ENV}`, 'background:yellow;font-size:2em;color:#00CC66;font-weight:bold;');
}

import React from 'react';
import {render} from 'react-dom';
import App from './App';

const root = document.getElementById('root');

render(<App />,root)
