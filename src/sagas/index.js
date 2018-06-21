import { take, put, call, fork, select, all } from 'redux-saga/effects'
import {saga as home} from '../routes/Test/index';

export default function* root(){
  yield all([
    fork(home.fetch)
  ])
};
