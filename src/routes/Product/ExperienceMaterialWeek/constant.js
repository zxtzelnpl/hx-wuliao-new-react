export const mark = ['product','experience','week'];

export const title = '周报';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/experience/week/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/experience/week/page`
}
