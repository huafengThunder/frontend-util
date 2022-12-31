/* eslint-disable prettier/prettier */
import requests from '@/utils/request';
export function getOpenai (data) {
  console.log(data)
  return requests({
    url: '/feutil/openai',
    method: 'get',
    params:data
  });
}
