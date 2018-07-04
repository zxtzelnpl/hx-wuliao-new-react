import request from '../../utils/request';

export async function queryData() {
  return request('http://public.jyzqsh.com/data.json',{
    credentials: 'omit',
  });
}
