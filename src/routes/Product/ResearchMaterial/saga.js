import * as actionTypes from './actionTypes';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

function getLast(arr) {
  if (Array.isArray(arr)) {
    let len = arr.length;
    return arr[len - 1]
  }
}

function* init(action) {
  try {
    const primary = yield call(service.getPrimaryTotal, action.urlParams);

    const concentrate = yield call(service.getConcentrateTotal, action.urlParams);

    const yieldArray = [];
    const data = {
      primaryPhaseList:[],
      concentratePhaseList:[],
      primaryPhaseCurrent:[],
      concentratePhaseCurrent:[],
      receivedAt: moment().unix()
    };

    if(Array.isArray(primary.phase_list) && primary.phase_list.length!==0){
      const primaryPhaseId = getLast(primary.phase_list);

      data.primaryPhaseList = primary.phase_list.reverse();

      yieldArray.push(put({
        type: actionTypes.REQUEST_PRIMARY,
        urlParams: action.urlParams,
        params: {
          phase: primaryPhaseId,
        }
      }))
    }

    if(Array.isArray(primary.phase_list) && primary.phase_list.length!==0){
      const concentratePhaseId = getLast(concentrate.phase_list);

      data.concentratePhaseList = concentrate.phase_list.reverse();

      yieldArray.push(put({
        type: actionTypes.REQUEST_CONCENTRATE,
        urlParams: action.urlParams,
        params: {
          phase: concentratePhaseId,
        }
      }))
    }


    yield [
      put({
        type: actionTypes.GET_TOTAL,
        urlParams: action.urlParams,
        data: data
      }),
      ...yieldArray
    ]
  }
  catch (error) {
    yield put({
      type: actionTypes.ERROR,
      error
    });
  }
}

function* getPrimaryPhase(action) {
  try {
    const response = yield call(service.getPrimaryPhase, action.urlParams, action.params)

    const data = {
      primaryPhaseId: action.params.phase,
      primaryPhaseCurrent: response.info,
      receivedAt: moment().unix()
    }

    yield put({
      type: actionTypes.RECEIVED_PRIMARY,
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
function* getConcentratePhase(action) {
  try {
    const response = yield call(service.getConcentratePhase, action.urlParams, action.params)

    const data = {
      concentratePhaseId: action.params.phase,
      concentratePhaseCurrent: response.info,
      receivedAt: moment().unix()
    }

    yield put({
      type: actionTypes.RECEIVED_CONCENTRATE,
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
  yield takeLatest(actionTypes.REQUEST_PRIMARY, getPrimaryPhase);
  yield takeLatest(actionTypes.REQUEST_CONCENTRATE, getConcentratePhase);
}
