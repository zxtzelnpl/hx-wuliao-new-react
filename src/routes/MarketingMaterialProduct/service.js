import request from '../../utils/request';

const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/product/total`
}

const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/product/page`
}

const detailUrl = ({team,child,object})=>{
  return `/api/product/${team}/${child}/marketing/${object}/page`
}

export async function getTotal(urlParams) {

  const url = totalUrl(urlParams);

  console.log(url)
  console.log(url)
  console.log(url)

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
