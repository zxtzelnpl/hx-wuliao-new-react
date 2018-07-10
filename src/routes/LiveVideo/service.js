import request from '../../utils/request';

const addMessageUrl = '/chat_t/send_msg';
const getMessageUrl = '/chat_t/get_msg_data';


export async function sendMessages(params){

  return request(addMessageUrl,{
    method:'POST',
    body:params
  });
}

export async function getMessages(params){

  return request(getMessageUrl,{
    method:'POST',
    body:params
  });
}

