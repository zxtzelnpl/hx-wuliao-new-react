import * as actionTypes from './actionTypes';

let initialState = {
  total:{},
  beforeTotal:{}
};

const reducer = (state=initialState,action) => {
  switch (action.type){
    case actionTypes.REQUEST:
      return state;
    case actionTypes.RECEIVED:
      return {
        ...state,
        ...action.data
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error:action.error
      }
    case actionTypes.BEFORE:
      const {liNameSpace} = action;
      const {total,beforeTotal} = state;
      const newBeforeTotal = {
        ...beforeTotal,
        [liNameSpace]:total[liNameSpace]
      }
      return {
        ...state,
        beforeTotal:newBeforeTotal
      };
    default:
      return state;
  }
}

export default reducer;
