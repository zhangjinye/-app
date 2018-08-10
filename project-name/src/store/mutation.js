//import state from './state'

export default {
    //获取key值
    getKey(state,access_token){
        state.key = access_token;
    },
    //获取服务员信息
    getWaiterInfo(state,value){
        state.waiter_info = value;
    },
    //退出登录
    out_login(state){
        state.key = '';
        state.waiter_info = '';
        state.out_login = true;
    },
    //登录
    login_status(state){
        state.login = true;
    },

    //获取流水号
    shopInfo(state,value){
        state.shopInfo = value;
    },

    //房台信息处理
    tableInfo(state,value){
        state.tableInfo = value;
    },

    //购物车处理
    addCart(state,params){
        
    }
}