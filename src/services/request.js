import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 发送请求时做拦截操作
instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作

    return config
  },
  (error) => error
)
// 网络响应时做拦截操作
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权的访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return error
  }
)

export default instance
