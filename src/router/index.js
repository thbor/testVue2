import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Table from '@/components/Table'
Vue.use(Router)

export default new Router({
   //去掉#
   mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/table',
      name:'Table',
      component:Table
    }
    
  ]
})
