import Vue from 'vue'
import Router from 'vue-router'
import BMap from '@/views/BMap'
import Layout from '@/views/layout'
import Dashboard from '@/views/dashboard'
import Html2canvas from '@/views/html2canvas'
import GooFlow from '@/views/gooFlow'
import vueQuill from '@/views/vueQuill'
import JsZip from '@/views/jszip/index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    redirect: '/dashboard',
    component: Layout,
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }, {
      path: '/bmap',
      name: '百度地图',
      component: BMap
    },
    {
      path: '/jszip',
      name: '',
      component: JsZip
    },
    {
      path: '/html2canvas',
      name: 'html2canvas',
      component: Html2canvas
    },
    {
      path: '/gooFlow',
      name: 'gooFlow',
      component: GooFlow
    }, {
      path: '/vueQuill',
      name: 'vueQuill',
      component: vueQuill
    }
    ]
  }]
})
