import {put, take} from "redux-saga/effects";
import * as actionTypes from "components/Alert/actionTypes";

const checkError = action => {
  const {error,type} = action;
  if(!error
      ||!error.message
      ||type === actionTypes.ERROR
  ){
    return false
  }
  return type.indexOf('ERROR') > -1
}

export default function* rootFetch() {
  while(true){
    const action = yield take(checkError);
    console.log(action.error);
    // yield put({
    //   type:actionTypes.ERROR,
    //   message:action.error.message
    // })
  }
}
