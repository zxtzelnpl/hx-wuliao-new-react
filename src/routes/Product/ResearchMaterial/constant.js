export const mark = ['product','marketing','record'];

export const title = '研究素材';

export const path = 'research';

export const primaryPhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/primary/phase`;
}

export const primaryTotal = ({team,child})=>{
  return `/api/product/${team}/${child}/research/primary/allphase`;
}

export const concentratePhaseUrl = ({team,child})=>{
  return `/api/product/${team}/${child}/research/concentrate/phase`;
}

export const concentrateTotal = ({team,child})=>{
  return `/api/product/${team}/${child}/research/concentrate/allphase`;
}

