import './index.less';
import "babel-polyfill";
import 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import App from './App';

const root = document.getElementById('root');


render(<App />,root)

