import request from 'utils/request';
import {totalUrl,pageUrl} from './constant';


export async function getTotal(urlParams) {

  const url = totalUrl(urlParams);

  return request(url,{
    method:'POST'
  });
}

export async function getPage(urlParams,params) {

  const url = pageUrl(urlParams);

  return request(url,{
    method:'POST',
    body: params,
  });
}

export async function getDetail(urlParams,params) {

  const url = pageUrl(urlParams);

  return request(url,{
    method:'POST',
    body: params,
  });
}
