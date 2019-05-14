import { get, post } from './request.js'

let apiList = {
    getData: () => get('/getData')
}

export default apiList
