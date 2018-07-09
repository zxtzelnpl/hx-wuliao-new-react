import request from '../../utils/request';

const addMessageUrl = '/chat/send_msg';

const getMessageUrl = '/chat/get_msg_data';


export async function sendMessages(params){
  return request(addMessageUrl,{
    method:'POST',
    body:params
  })
}

export async function getMessages(params){
  return request(getMessageUrl,{
    method:'POST',
    body:params
  })
}
