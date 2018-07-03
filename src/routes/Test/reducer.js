import * as actionTypes from './actionTypes'

const initialState = {}

export default function home(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        data:action.data,
        isFetching: false
      }
    case actionTypes.CANCEL:
      return {
        ...state,
        isFetching: false
      }
    case actionTypes.ERROR:
      return {
        ...state,
        error:action.error,
        isFetching: false
      }
    default:
      return state
  }
}
