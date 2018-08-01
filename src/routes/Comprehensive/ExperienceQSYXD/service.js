import request from '../../../utils/request';

const totalUrl = `/api/comprehensive/experience/qsyxd/total`;

const pageUrl = `/api/comprehensive/experience/qsyxd/page`;

const detailUrl = `/api/comprehensive/experience/qsyxd/detail`;


export async function getTotal() {

  return request(totalUrl,{
    method:'POST'
  });
}

export async function getPage(urlParams,params) {

  return request(pageUrl,{
    method:'POST',
    body: params,
  });
}

export async function getDetail(urlParams,params) {

  return request(detailUrl,{
    method:'POST',
    body: params,
  });
}