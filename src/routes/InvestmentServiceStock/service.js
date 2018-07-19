import request from '../../utils/request';

const totalUrl = `/api/comprehensive/investment/servicestock/total`;

const pageUrl = `/api/comprehensive/investment/servicestock/page`;

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
