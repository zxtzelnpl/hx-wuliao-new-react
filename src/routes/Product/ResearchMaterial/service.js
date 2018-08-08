import request from 'utils/request';

import {primaryTotal,primaryPhaseUrl,concentrateTotal,concentratePhaseUrl} from './constant'


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
