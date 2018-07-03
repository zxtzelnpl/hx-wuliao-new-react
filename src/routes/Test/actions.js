import * as actionTypes from './actionTypes';

export function request() {
  return {
    type:actionTypes.REQUEST
  }
}

export function received(data) {
  return {
    type:actionTypes.RECEIVED,
    data
  }
}

export function error(error) {
  return {
    type:actionTypes.ERROR,
    error
  }
}
