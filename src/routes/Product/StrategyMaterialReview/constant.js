export const mark = ['product','strategy','review'];

export const title = '收评';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/review/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/review/page`
}

