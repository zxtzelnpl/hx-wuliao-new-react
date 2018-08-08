export const mark = ['product','marketing','record'];

export const title = '战绩展示';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/record/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/marketing/record/page`
}

