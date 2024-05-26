import requests from '@/utils/request';
export function loginApi(data) {
    return requests({
        url: '/feutil/auth/login',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
}


export function logout(data) {
    return requests({
        url: '/feutil/auth/logout',
        method: 'get',
        data: data,
    })
}

export function isLoggedIn(data) {
    return requests({
        url: '/feutil/auth/isLoggedIn',
        method: 'get',
        data: data,
    })
}