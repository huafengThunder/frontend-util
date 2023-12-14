import requests from '@/utils/request';
export function getMenus(data) {
    return requests({
        url: '/feutil/menu/',
        method: 'get',
        params: data
    });
}