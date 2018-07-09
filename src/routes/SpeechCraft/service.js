import request from '../../utils/request';

const totalUrl = `/api/comprehensive/marketing/speechcraft/total`;

const pageUrl = `/api/comprehensive/marketing/speechcraft/page`;


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

  return request(pageUrl,{
    method:'POST',
    body: params,
  });
}
