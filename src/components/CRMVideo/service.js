import request from '../../utils/request';

const totalUrl = '/api/get_crm_video/total';

const pageUrl = '/api/get_crm_video/page';


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

  return request(pageUrl,{
    method:'POST',
    body: params,
  });
}
