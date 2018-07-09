import request from '../../utils/request';

const primaryPhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/primary/phase`;
}

const primaryTotal = ({team,child})=>{
  return `/api/product/${team}/${child}/research/primary/allphase`;
}

const concentratePhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/concentrate/phase`;
}

const concentrateTotal = ({team,child})=>{
  return `/api/product/${team}/${child}/research/concentrate/allphase`;
}


export async function getPrimaryTotal(urlParams){
  const url = primaryTotal(urlParams);

  return request(url,{
    method:'POST'
  });
}

export async function getPrimaryPhase(urlParams,params) {

  const url = primaryPhaseUrl(urlParams);

  return request(url,{
    method:'POST',
    body:params
  });
}

export async function getConcentrateTotal(urlParams){
  const url = concentrateTotal(urlParams);

  return request(url,{
    method:'POST'
  });
}

export async function getConcentratePhase(urlParams,params) {

  const url = concentratePhaseUrl(urlParams);

  return request(url,{
    method:'POST',
    body:params
  });
}
