import {mark} from './constant'

const PREFIX = mark.map(item=>item.toUpperCase()).join('_');

export const INIT = `${PREFIX}_INIT`;
export const TOTAL = `${PREFIX}_TOTAL`;
export const TOTAL_RECEIVED = `${PREFIX}_TOTAL_RECEIVED`;
export const REQUEST = `${PREFIX}_REQUEST`;
export const RECEIVED = `${PREFIX}_RECEIVED`;
export const ERROR = `${PREFIX}_ERROR`;
