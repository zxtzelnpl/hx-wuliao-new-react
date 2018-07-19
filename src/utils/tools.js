export function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export const pdfReg = /.+\.pdf$/;
export const officeReg = /.+\.(pptx|ppt|docx|doc)$/;
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
