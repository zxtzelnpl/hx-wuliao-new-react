import * as actionTypes from './actionTypes'
const initialState = {
  primaryPhaseId:'',
  primaryPhaseList:[],
  primaryPhaseCurrent:[],
  concentratePhaseId:'',
  concentratePhaseList:[],
  concentratePhaseCurrent:[],
}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.INIT:
      return {
        ...state,
        isFetching:true,
        error:null
      }
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:true,
        error:null
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        isFetching:false,
        ...action.data
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching:false,
        error:action.error
      }
    default:
      return state
  }
}

export default reducer
