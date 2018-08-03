import {videoPosterUrl} from './const';

function getRange(x,y){
  return Math.floor(Math.random()*(y-x+1))+ x
}

export function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export const pdfReg = /.+\.pdf$/;
export const officeReg = /.+\.(pptx|ppt|docx|doc|xlsx|xls)$/;
export const imgReg = /.+\.(png|gif|jpg|jpeg|bmp)$/;

export const makePercent = str => {
  let number = Number(str) * 1000 / 10;
  if (isNaN(number)) {
    return ''
  }
  else {
    return number + '%';
  }
}

export const getPoster = () => {
  const index = getRange(1,20);
  return `${videoPosterUrl}/${index}.jpg`
}
