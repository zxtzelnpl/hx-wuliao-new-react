import request from 'utils/request';

const getMessageUrl = '/chat_t/get_msg_data';
const addMessageUrl = '/chat_t/send_msg';
// const getMessageUrl = '/api/get_chat_list';


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


// export async function getMessages(params){
//
//   let url = `${getMessageUrl}/${params.start}/${params.end}`;
//
//   return request(url,{
//     method:'POST'
//   });
// }
