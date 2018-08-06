import * as actionTypes from './actionTypes';
import {call, put, takeLatest, all,select,takeEvery} from 'redux-saga/effects';
import moment from 'moment';
import nameSpace from './nameSpace';
import myStorage from "utils/myStorage";

const getState = state=>state[nameSpace];

function* getTotal(action) {
  try{
    const {nameSpaceArray, serviceArray,initPageNameSpace} = action;
    const effectsArray = serviceArray.map(service => call(service.getTotal));
    const responseArray = yield all(effectsArray);
    let data = {};
    nameSpaceArray.forEach((name_space, index) => {
      data[name_space] = responseArray[index].total;
    })

    yield put({
      type: actionTypes.RECEIVED,
      data,
      receivedAt:moment().unix()
    })

    if(initPageNameSpace!==''){
      yield put({
        type: actionTypes.BEFORE,
        liNameSpace:initPageNameSpace,
      })
    }
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* changeBefore(){
  const STATE = yield select(getState);
  const {beforeTotal} = STATE;

  myStorage.setItem(nameSpace,JSON.stringify(beforeTotal));

}

export default function* rootFetch() {
  yield takeLatest(actionTypes.REQUEST, getTotal);
  yield takeEvery(actionTypes.BEFORE, changeBefore);
}
