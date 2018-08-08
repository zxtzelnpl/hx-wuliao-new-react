import * as actionTypes from './actionTypes';
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import myStorage from 'utils/myStorage';
import {getNewKeyForProduct,getBeforeTotal} from 'utils/tools';
import nameSpace from './nameSpace';

const getState = state => state[nameSpace];

function* init(action){
  try{
    const data = {};
    let {total, pageSize, sort} = yield select(getState);

    if(total == undefined){
      const response = yield call(service.getTotal,action.urlParams);
      total = response.total;
    }

    if(total!==0){
      const params = {
        from: 0,
        to: pageSize,
        sort: sort
      }
      const response = yield call(service.getPage,action.urlParams,params);
      data.list = response.list;
    }


    data.total = total;
    data.receivedAt = moment().unix();

    /*将浏览记录改变*/
    const key = getNewKeyForProduct(action.urlParams,nameSpace);
    myStorage.setItem(key, total);
    data.total = total;
    data.beforeTotal = total;

    yield put({
      type:actionTypes.RECEIVED,
      data
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* getTotal(action){
  try{
    const {total} = yield call(service.getTotal,action.urlParams);
    const key = getNewKeyForProduct(action.urlParams,nameSpace);
    const beforeTotal = getBeforeTotal(key);
    yield put({
      type:actionTypes.RECEIVED,
      data:{
        total,
        beforeTotal,
      }
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error,
    });
  }
}

function* getPage(action){

  const {urlParams,params,currentPage} = action;

  try{
    const page = yield call(service.getPage,urlParams,params,currentPage)

    const data = {
      list:page.list,
      currentPage:currentPage,
      receivedAt:moment().unix()
    }

    yield put({
      type:actionTypes.RECEIVED,
      data
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

export default function* rootFetch() {
  yield takeLatest(actionTypes.INIT,init);
  yield takeLatest(actionTypes.TOTAL,getTotal);
  yield takeLatest(actionTypes.REQUEST,getPage);
}
