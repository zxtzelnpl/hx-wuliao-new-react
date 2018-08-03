import * as actionTypes from './actionTypes';
import {TOTAL} from "components/SiderMenu/actionTypes";
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import nameSpace from './nameSpace';
import myStorage from 'utils/myStorage';

const getState = state => state[nameSpace];

function* init(){
  try{
    const data = {};
    const {pageSize,sort,total} = yield select(getState);

    if(!total){
      const response = yield call(service.getTotal);
      data.total = response.total;
    }

    if(data.total !== 0){
      const params = {
        from:0,
        to:pageSize,
        sort:sort
      }
      const page = yield call(service.getPage,params);
      data.list = page.list;
    }

    data.receivedAt = moment().unix();
    myStorage.setItem(nameSpace,total);
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

function* getTotal(){
  try{
    const {total} = yield call(service.getTotal);
    yield put({
      type:actionTypes.RECEIVED,
      data:{
        total
      }
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* getPage(action){
  try{
    const {currentPage} = action;
    const {pageSize,sort} = yield select(getState);
    const params = {
      from:pageSize*(currentPage-1),
      to:pageSize*(currentPage),
      sort:sort
    }
    const page = yield call(service.getPage,params);
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
  yield takeLatest(actionTypes.REQUEST,getPage);
  yield takeLatest(TOTAL,getTotal);
}
