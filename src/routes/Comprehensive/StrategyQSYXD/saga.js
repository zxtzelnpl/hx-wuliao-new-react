import * as actionTypes from './actionTypes';
import {call, put, takeLatest, select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import myStorage from 'utils/myStorage';
import {getBeforeTotal} from 'utils/tools';
import nameSpace from './nameSpace';

const getState = state => state[nameSpace];

function* init() {
  try {
    const data = {};
    let {total, pageSize, sort} = yield select(getState);

    if (total == undefined) {
      const response = yield call(service.getTotal);
      total = response.total;
    }

    if (total !== 0) {
      const params = {
        from: 0,
        to: pageSize,
        sort: sort
      }
      const page = yield call(service.getPage, params);
      data.list = page.list;
    }

    data.receivedAt = moment().unix();

    /*将浏览记录改变*/
    myStorage.setItem(nameSpace, total);
    data.total = total;
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

function* getTotal() {
  try {
    const {total} = yield call(service.getTotal);
    const beforeTotal = getBeforeTotal(nameSpace);
    yield put({
      type: actionTypes.RECEIVED,
      data: {
        total,
        beforeTotal,
      }
    })
  }
  catch (error) {
    yield put({
      type: actionTypes.ERROR,
      error,
    });
  }
}

function* getPage(action) {
  try {
    const {currentPage} = action;
    const {pageSize, sort} = yield select(getState);
    const params = {
      from: pageSize * (currentPage - 1),
      to: pageSize * (currentPage),
      sort: sort
    }
    const page = yield call(service.getPage, params);
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
  yield takeLatest(actionTypes.INIT, init);
  yield takeLatest(actionTypes.TOTAL, getTotal);
  yield takeLatest(actionTypes.REQUEST, getPage);
}
