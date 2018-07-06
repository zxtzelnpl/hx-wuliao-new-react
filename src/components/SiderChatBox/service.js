import request from '../../utils/request';

const addMessageUrl = '/api/leave_message_add';

const getMessageUrl = '/api/get_leave_message';


export async function addMessages(params){
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
