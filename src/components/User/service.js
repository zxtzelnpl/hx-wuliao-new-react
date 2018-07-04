import request from '../../utils/request';

const codeImgUrl = '/api/get_captcha';
const loginUrl = '/api/login';


export async function getCode() {
  return request(codeImgUrl);
}

export async function login(params) {
  return request(loginUrl,{
    method:'POST',
    body: params,
  });
}
