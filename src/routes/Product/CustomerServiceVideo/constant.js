export const mark = ['product','customer','video'];

export const title = '服务视频';

export const path = `${mark[1]}/${mark[2]}`;

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/customer/video/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/customer/video/page`
}
