import {videoPosterUrl} from './const';
import myStorage from "./myStorage";

/*获得随机数*/
function getRangeRandom(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x
}

/**
 * 返回一个函数使其在x和y范围内取数
 * @param x
 * @param y
 * @returns {Function}
 */
function makeGetRangeSort(x, y) {
  let number = x;
  return function () {
    number++;
    if (number > y) {
      number = x;
    }
    return number;
  }
}

/**
 * 去字符串空格
 * @param str
 */
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export const pdfReg = /.+\.pdf$/;
export const officeReg = /.+\.(pptx|ppt|docx|doc|xlsx|xls)$/;
export const imgReg = /.+\.(png|gif|jpg|jpeg|bmp)$/;

/**
 * 计算百分比
 * @param str
 * @returns {string}
 */
export const makePercent = str => {
  let number = Number(str) * 1000 / 10;
  if (isNaN(number)) {
    return ''
  }
  else {
    return number + '%';
  }
}

/*取到视频海报*/
const getRangeSort = makeGetRangeSort(1, 70);
export const getPoster = () => {
  const index = getRangeSort();
  return `${videoPosterUrl}/${index}.jpg`;
};

/*首字母大写*/
export const capitalize = (str) => {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
};

/*取到之前的总数*/
export const getBeforeTotal = (key) => {
  let total = myStorage.getItem(key);
  console.log(`%c${total}`,'background:yellow;color:red;')
  if(total===null){
    return 0;
  }
  else if(total === undefined){
    return 0;
  }
  else{
    return total
  }
};

/*更具组名和产品和NameSpace生产新的key*/
export const getNewKeyForProduct = (urlParams,nameSpace)=>{
  const {team,child} = urlParams;
  return team.toUpperCase() + '_' + child.toUpperCase() + '_' +nameSpace
}
