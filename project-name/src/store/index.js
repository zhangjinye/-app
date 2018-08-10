import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutation'
import getters from './getters'
import actions from './action'

Vue.use(Vuex)
const state = {
    key: '',//access_token
    waiter_info: Object,//服务员资料
    out_login: false,//是否退出登录
    login: false,//登录
    tableInfo: Object,//房台对象信息
    cartList: Array,
    shopInfo: '',//流水号
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [createPersistedState()]//持久保存vuex的值，默认存储到localStorage
})

