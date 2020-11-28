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

// 3.新碟上架
export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 4.排行榜数据
export function getRankList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}
