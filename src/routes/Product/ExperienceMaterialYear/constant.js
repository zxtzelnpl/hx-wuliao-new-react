export const mark = ['product','experience','year'];

export const title = '年报';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/experience/year/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/experience/year/page`
}
