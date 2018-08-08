import request from 'utils/request';
import {totalUrl,pageUrl,detailUrl} from './constant';

export async function getTotal() {

  return request(totalUrl,{
    method:'POST',
  });
}

export async function getPage(params) {

  return request(pageUrl,{
    method:'POST',
    body: params,
  });
}

export async function getDetail(params) {

  return request(detailUrl,{
    method:'POST',
    body: params,
  });
}
