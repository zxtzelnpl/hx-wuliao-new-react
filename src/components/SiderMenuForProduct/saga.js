import * as actionTypes from './actionTypes';
import {call, put, takeLatest, all,select,takeEvery} from 'redux-saga/effects';
import moment from 'moment';
import nameSpace from './nameSpace';
import myStorage from "utils/myStorage";

const getState = state=>state[nameSpace];

function* getTotal(action) {
  try{
    const {nameSpaceArray, serviceArray,initPageNameSpace,urlParams} = action;
    const effectsArray = serviceArray.map(service => call(service.getTotal,urlParams));
    const responseArray = yield all(effectsArray);
    let total = {};
    let beforeTotal ={};
    nameSpaceArray.forEach((name_space, index) => {
      total[name_space] = responseArray[index].total;
    })

    const {team,child} = urlParams;
    const urlNameSpace =`${nameSpace}-${team}-${child}`;
    let beforeTotalStr = myStorage.getItem(urlNameSpace);
    if(beforeTotalStr){
      beforeTotal = JSON.parse(beforeTotalStr);
    }


    yield put({
      type: actionTypes.RECEIVED,
      data:{
        total,
        beforeTotal,
        receivedAt:moment().unix(),
        ...urlParams
      }
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
  const {beforeTotal,team,child} = STATE;
  const urlNameSpace =`${nameSpace}-${team}-${child}`;
  myStorage.setItem(urlNameSpace,JSON.stringify(beforeTotal));

}

export default function* rootFetch() {
  yield takeLatest(actionTypes.REQUEST, getTotal);
  yield takeEvery(actionTypes.BEFORE, changeBefore);
}
