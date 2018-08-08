export const mark = ['product','strategy','analysis'];

export const title = '盘中解盘';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/analysis/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/analysis/page`
}

