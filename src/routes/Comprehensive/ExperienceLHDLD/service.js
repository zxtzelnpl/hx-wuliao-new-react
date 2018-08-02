import request from '../../../utils/request';

const totalUrl = `/api/comprehensive/experience/lhdld/total`;

const pageUrl = `/api/comprehensive/experience/lhdld/page`;

const detailUrl = `/api/comprehensive/experience/lhdld/detail`;


export async function getTotal() {

  return request(totalUrl,{
    method:'POST'
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
