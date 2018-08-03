import {videoPosterUrl} from './const';

function getRangeRandom(x,y){
  return Math.floor(Math.random()*(y-x+1))+ x
}

function makeGetRangeSort(x,y){
  let number = x;
  return function (){
    number++;
    if(number>y){
      number = x;
    }
    return number;
  }
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

const getRangeSort = makeGetRangeSort(1,70);
export const getPoster = () => {
  const index = getRangeSort();
  return `${videoPosterUrl}/${index}.jpg`
}
