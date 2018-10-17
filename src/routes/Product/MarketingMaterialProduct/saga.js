import * as actionTypes from './actionTypes';
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import myStorage from 'utils/myStorage';
import {getNewKeyForProduct,getBeforeTotal} from 'utils/tools';
import nameSpace from './nameSpace';

const getState = state => state[nameSpace];
let NEED_TO_INIT = false;

function* getTotal(action) {
  try {
    const {total} = yield call(service.getTotal, action.urlParams);
    const key = getNewKeyForProduct(action.urlParams, nameSpace);
    const beforeTotal = getBeforeTotal(key);
    yield put({
      type: actionTypes.TOTAL_RECEIVED,
      data: {
        total,
        beforeTotal,
        list:undefined,
      }
    })

    if (NEED_TO_INIT) {
      yield put({
        type: actionTypes.INIT,
        urlParams: action.urlParams,
      });
      NEED_TO_INIT = false;
    }
  }
  catch (error) {
    yield put({
      type: actionTypes.ERROR,
      error,
    });
  }
}

function* init(action) {
  try {
    const data = {};
    let {total, isFetchingTotal, pageSize, sort} = yield select(getState);

    /*如果正在请求总数,则结束，打上请求总数后需要再次请求这个*/
    if(isFetchingTotal){
      return NEED_TO_INIT = true;
    }
    else if(total !== 0){
      const params = {
        from: 0,
        to: pageSize,
        sort: sort
      }
      const response = yield call(service.getPage, action.urlParams, params);
      data.list = response.list;
    }

    data.receivedAt = moment().unix();

    /*将浏览记录改变*/
    const key = getNewKeyForProduct(action.urlParams, nameSpace);
    myStorage.setItem(key, total);
    data.beforeTotal = total;

    yield put({
      type: actionTypes.RECEIVED,
      data
    })
  }
  catch (error) {
    yield put({
      type: actionTypes.ERROR,
      error
    });
  }
}

function* getPage(action) {
  try {
    const {urlParams, params, currentPage} = action;
    const page = yield call(service.getPage, urlParams, params, currentPage)

    const data = {
      list: page.list,
      currentPage: currentPage,
      receivedAt: moment().unix()
    }

    yield put({
      type: actionTypes.RECEIVED,
      data
    })
  }
  catch (error) {
    yield put({
      type: actionTypes.ERROR,
      error
    });
  }
}

export default function* rootFetch() {
  yield takeLatest(actionTypes.TOTAL, getTotal);
  yield takeLatest(actionTypes.INIT, init);
  yield takeLatest(actionTypes.REQUEST, getPage);
}
