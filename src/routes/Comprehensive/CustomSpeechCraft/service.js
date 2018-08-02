import request from '../../../utils/request';

const totalUrl = `/api/comprehensive/customer/speechcraft/total`;

const pageUrl = `/api/comprehensive/customer/speechcraft/page`;

const detailUrl = `/api/comprehensive/customer/speechcraft/detail`;


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
