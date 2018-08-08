import {mark} from './constant'

const PREFIX = mark.map(item=>item.toUpperCase()).join('_');

export const INIT = `${PREFIX}_INIT`;
export const TOTAL = `${PREFIX}_TOTAL`;
export const REQUEST = `${PREFIX}_REQUEST`;
export const RECEIVED = `${PREFIX}_RECEIVED`;
export const ERROR = `${PREFIX}_ERROR`;
