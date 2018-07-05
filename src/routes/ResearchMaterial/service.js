import request from '../../utils/request';

const primaryPhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/primary`
}

const concentratePhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/concentrate`
}



export async function getPrimaryPhase(urlParams,params) {

  const url = primaryPhaseUrl(urlParams);

  return request(url,{
    method:'POST',
    body:params
  });
}

export async function getConcentratePhase(urlParams,params) {

  const url = concentratePhaseUrl(urlParams);

  return request(url,{
    method:'POST',
    body:params
  });
}
