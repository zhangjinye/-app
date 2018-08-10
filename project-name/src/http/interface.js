import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 登录
export const login = params => {
    return axios({
        url: 'api/Login/UserLogin',
        method: 'post',
        params
    })
}

// 登录data
export const login_data = data => {
    return axios({
        url: 'api/Login/UserLogin',
        method: 'post',
        data
    })
}

//根据区域查找房台
export const getCashierRegionTableInfo = params => {
    return axios({
        //url: 'wx/GetCashierRegionTableInfo',
        url: 'Catering/GetCashierRegionTableInfo',
        method: 'get',
        params
    })
}

//操作房台
export const operateCateringTableByOperateType = data => {
    return axios({
        //url: 'wx/GetCashierRegionTableInfo',
        url: 'Catering/OperateCateringTableByOperateType?key=' + data.key,
        method: 'post',
        data: data.dataJson
    })
}

//读取一级分类
export const getFirstCategory = params => {
    return axios({
        //url: 'wx/GetCashierRegionTableInfo',
        url: 'product/GetFirstCategory',
        method: 'get',
        params
    })
}

//读取菜品列表
export const getProductPcCashierList = params => {
    return axios({
        //url: 'wx/GetCashierRegionTableInfo',
        url: 'product/GetProductPcCashierList',
        method: 'get',
        params
    })
}
 

// 默认全部倒出
// 根绝需要进行  
export default {
    login,
    login_data,
    getCashierRegionTableInfo,
    operateCateringTableByOperateType,
    getFirstCategory,
    getProductPcCashierList
}
