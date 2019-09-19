import request from '../utils/request'

export function loginByUsername(username: string, password: string) {
    const data = {
        username,
        password
    }
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
}
export function registerByUsername(username: string, password: string, realname: string) {
    const data = {
        username,
        password,
        realname
    }
    return request({
        url: '/api/user/register',
        method: 'post',
        data
    })
}
export function getUserInfo() {
    return request({
        url: '/api/user/infor',
        method: 'get'
    })
}
export function logoutUserInfo() {
    return request({
        url: '/api/user/logout',
        method: 'get'
    })
}
