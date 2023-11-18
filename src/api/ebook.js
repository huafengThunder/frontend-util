import requests from '@/utils/request';
export function getBookList(data) {
  return requests({
    url: '/feutil/ebook',
    method: 'get',
    params: data
  });
}
