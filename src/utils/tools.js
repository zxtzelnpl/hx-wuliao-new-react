export function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export const pdfReg = /.+\.pdf$/;
export const officeReg = /.+\.(pptx|ppt|docx|doc)$/;
export const imgReg = /.+\.(png|gif|jpg|jpeg|bmp)$/;
