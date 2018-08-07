import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import table from '@/pages/table/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/table',
      name: '房台',
      component: table
    }
  ]
})
