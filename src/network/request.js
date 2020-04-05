import axios from 'axios';
const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/h8',
    timeout:5000
})
instance.interceptors.request.use(config => {
    // console.log(config);
    
return config
},error => {

})
instance.interceptors.response.use(res => {
return res
},error => {

})
export function request(config){
    return new Promise((resolve,reject) => {
        instance(config).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}