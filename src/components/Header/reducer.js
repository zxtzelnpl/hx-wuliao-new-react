import * as actionTypes from './actionTypes';

const initialState = {

}

const header = (state=initialState,action)=>{
  switch(action.type){
    case actionTypes.FIRST:
      return {
        firstSelectId:action.id
      }
    case actionTypes.SECOND:
      return {
        firstSelectId:state.firstSelectId,
        secondSelectId:action.id
      }
    case actionTypes.THIRD:
      return {
        ...state,
        thirdSelectId:action.id
      }
    default:
      return state;
  }
}

export default header;
