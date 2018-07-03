import {delay} from 'redux-saga'
import { call ,put, take, select, fork, cancel, cancelled} from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as service from './service';

function* queryData() {
  try{
    const response = yield call(service.queryData);
    yield delay(2000);
    yield put({
      type:actionTypes.RECEIVED,
      data:response
    });
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
  finally {
    if (yield cancelled()){
      console.log('i did it')
    }
  }
}

export function* fetch() {
  while (true) {
    yield take(actionTypes.REQUEST);
    const task = yield fork(queryData);

    const action = yield take([actionTypes.RECEIVED,actionTypes.CANCEL,actionTypes.ERROR]);

    if(action.type === actionTypes.CANCEL){
      yield cancel(task)
    }
  }
}
