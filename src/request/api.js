import { get, post } from './request.js'

let apiList = {
    getData: () => get('/getData'),
    editData: (data, params) => post('/editData?id=' + params, data)
}

export default apiList
