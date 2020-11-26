import request from './request'

// 推荐页面的全部网络请求
// 1.轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

// 2.热门推荐数据
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}
