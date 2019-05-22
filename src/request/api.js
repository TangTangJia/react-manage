import { get, post } from './request.js'

let apiList = {
    getData: () => get('/getData'), // 获取表格数据
    editData: (data, params) => post('/editData?id=' + params, data),// 修改表格数据
    getCard: () => get('/card'), // 获取卡片内容
    getHoc: () => get('/getHoc') // 获取标签、列表内容
}

export default apiList
