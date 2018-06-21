import * as actionTypes from './actionTypes';

const initialState = {

}

const header = (state=initialState,action)=>{
  switch(action.type){
    case actionTypes.COMPREHENSIVE:
      return {

      }
    case actionTypes.PRODUCT:
      return {

      }
    case actionTypes.CHILD_PRODUCT:
      return {

      }
    default:
      return state;
  }
}

export default header;