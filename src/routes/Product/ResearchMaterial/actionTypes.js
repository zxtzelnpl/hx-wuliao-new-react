import {mark} from './constant'

const PREFIX = mark.map(item=>item.toUpperCase()).join('_');

export const INIT = `${PREFIX}_INIT`;
export const GET_TOTAL = `${PREFIX}_GET_TOTAL`;
export const REQUEST_PRIMARY = `${PREFIX}_PRIMARY_REQUEST`;
export const REQUEST_CONCENTRATE = `${PREFIX}_CONCENTRATE_REQUEST`;
export const RECEIVED_PRIMARY = `${PREFIX}_PRIMARY_RECEIVED`;
export const RECEIVED_CONCENTRATE = `${PREFIX}_CONCENTRATE_RECEIVED`;
export const ERROR = `${PREFIX}_ERROR`;
