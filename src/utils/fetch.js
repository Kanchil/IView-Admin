import axios from 'axios'
import {
  Message,
  Modal
} from 'iview'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => config, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // GATEWAY_TIMEOUT 超时状态
    if (res.code === 900) {
      Modal.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // store.dispatch('FedLogOut').then(() => {
        //   location.reload() // 为了重新实例化vue-router对象 避免bug
        // })
      })
    } else if (res.code === 500) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.resolve(JSON.parse(res.data))
    } else {
      if (typeof res.data === 'object') {
        return Promise.resolve(res.data)
      }
      try {
        const data = JSON.parse(res.data)
        return Promise.resolve(data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  error => {
    Message({
      message: '当前服务不可用,请稍后尝试',
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
