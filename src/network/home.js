import {request} from './request'
export function homemultidata(){
    return request({
        url:'/home/multidata'
    })
}