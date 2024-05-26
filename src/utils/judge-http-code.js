export function isSuccess(res) {
    return res?.code === 0
}
// 403,未登录
export function noLogin(res) {
    return res.response.status === 403
}