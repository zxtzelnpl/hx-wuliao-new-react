export const mark = ['product','strategy','prediction'];

export const title = '早评';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/prediction/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/strategy/prediction/page`
}

