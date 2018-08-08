export const mark = ['product','replay'];

export const title = '视频回播';

export const path = 'replay';

export const totalUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/replay/object/total`
}

export const pageUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/replay/object/page`
}

