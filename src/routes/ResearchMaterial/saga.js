import * as actionTypes from './actionTypes';
import { call ,put, takeLatest} from 'redux-saga/effects';
import * as service from './service';

function* init(action){
  try{
    const primary = yield call(service.getPrimaryPhase,action,{
      phase:70
    })

    const concentrate = yield call(service.getConcentratePhase,action,{
      phase:70
    })

    yield put({
      type:actionTypes.REQUEST,
      team:action.team,
      child:action.child,
      primaryPhaseId:primary.phase_list.pop(),
      concentratePhaseId:concentrate.phase_list.pop(),
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* getResearchAll(action){
  try{
    const primary = yield call(service.getPrimaryPhase,action,{
      phase:action.primaryPhaseId
    })

    const concentrate = yield call(service.getConcentratePhase,action,{
      phase:action.concentratePhaseId
    })

    const data = {
      primaryPhaseId:action.primaryPhaseId,
      primaryPhaseList:primary.phase_list,
      primaryPhaseCurrent:primary.info,
      concentratePhaseId:action.concentratePhaseId,
      concentratePhaseList:concentrate.phase_list,
      concentratePhaseCurrent:concentrate.info,
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

function* getPrimaryPhase(action){
  try{
    const primary = yield call(service.getPrimaryPhase,action,{
      phase:action.primaryPhaseId
    })

    const data = {
      primaryPhaseId:action.primaryPhaseId,
      primaryPhaseList:primary.phase_list,
      primaryPhaseCurrent:primary.info,
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

function* getConcentratePhase(action){
  try{
    const concentrate = yield call(service.getConcentratePhase,action,{
      phase:action.concentratePhaseId
    })

    const data = {
      concentratePhaseId:action.concentratePhaseId,
      concentratePhaseList:concentrate.phase_list,
      concentratePhaseCurrent:concentrate.info,
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
  yield takeLatest(actionTypes.REQUEST,getResearchAll);
  yield takeLatest(actionTypes.REQUEST_PRIMARY,getPrimaryPhase);
  yield takeLatest(actionTypes.REQUEST_CONCENTRATE,getConcentratePhase);
}
