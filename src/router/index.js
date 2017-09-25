import Vue from 'vue'
import Router from 'vue-router'
import BMap from '@/views/BMap'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/dashboard',
      component: Layout
    },
    {
      path: '/bmap',
      name: '百度地图',
      component: BMap
    }
  ]
})
