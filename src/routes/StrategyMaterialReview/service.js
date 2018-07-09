import request from '../../utils/request';

const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/review/total`
}

const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/review/page`
}

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
