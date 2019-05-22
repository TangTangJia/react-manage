import axios from 'axios'
// import qs from 'qs'
// axios 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'https://easy-mock.com/mock/5bd6a843bc9d684fc1f12b6e/test'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data
    // console.log(res)
    if (res.statusCode !== 1) {
        // return Promise.reject('error')
        return response.data
    } else {
        return response.data
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

// GET 请求
export function get(url, params) {
    return axios.get(url, {
        params: params
    })
}

// POST 请求
export function post(url, data, params) {
    // params = qs.stringify(params)
    return axios.post(url, data, params)
}

// put 请求
export function put(url, data, params) {
    // params = qs.stringify(params)
    // data = qs.stringify(data)
    return axios.put(url, data, params)
}

// delete 请求
export function dele(url, data) {
    return axios.delete(url, data)
}
