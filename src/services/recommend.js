import request from './request'

// 推荐页面的全部网络请求
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
