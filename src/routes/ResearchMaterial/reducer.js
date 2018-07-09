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
        isFetchingPrimary:true,
        isFetchingConcentrate:true,
        ...action.urlParams,
        error:null,
      }
    case actionTypes.GET_TOTAL:
      return {
        ...state,
        ...action.urlParams,
        ...action.data
      }
    case actionTypes.REQUEST_PRIMARY:
      return {
        ...state,
        isFetchingPrimary:true,
        ...action.urlParams,
        error:null
      }
    case actionTypes.RECEIVED_PRIMARY:
      return {
        ...state,
        isFetchingPrimary:false,
        ...action.data,

      }
    case actionTypes.REQUEST_CONCENTRATE:
      return {
        ...state,
        isFetchingConcentrate:true,
        ...action.urlParams,
        error:null
      }
    case actionTypes.RECEIVED_CONCENTRATE:
      return {
        ...state,
        isFetchingConcentrate:false,
        ...action.data,
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetchingPrimary:false,
        isFetchingConcentrate:false,
        error:action.error
      }
    default:
      return state
  }
}

export default reducer
