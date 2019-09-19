import request from '../utils/request'

export function getBlogList(id: number) {
    return request({
        url: '/api/blog/list',
        method: 'GET'
    })
}
export function addNewBlog(data: any) {
    return request({
        url: '/api/blog/new',
        method: 'post',
        data
    })
}
export function getBlogDetail(id: number) {
    return request({
        url: '/api/blog/detail',
        method: 'get',
        params: {
            id
        }
    })
}
