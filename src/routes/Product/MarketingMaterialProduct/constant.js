export const mark = ['product','marketing','product'];

export const title = '产品案例';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/product/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/product/page`
}

