export const mark = ['product','customer','analysis'];

export const title = '持仓分析';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/customer/analysis/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/customer/analysis/page`
}
