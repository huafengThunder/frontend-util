import requests from '@/utils/request';
export function getMenus(data) {
    return requests({
        url: '/feutil/menu',
        method: 'get',
        params: data
    });
}
export function addMenuApi(data) {
    return requests({
        url: '/feutil/menu',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
}