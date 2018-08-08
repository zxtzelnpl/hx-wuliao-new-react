import request from '../../../utils/request';

import {totalUrl,pageUrl} from './constant'

export async function getTotal(params) {

  return request(totalUrl,{
    method:'POST',
    body:params
  });
}

export async function getPage(params) {

  return request(pageUrl,{
    method:'POST',
    body: params,
  });
}
