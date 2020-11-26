import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends } from '@/services/recommend'

const changeTopBannerAction = (res) => {
  const { banners } = res
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: banners
  }
}
const changeHotRecommendAction = (res) => {
  const { result } = res
  return {
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: result
  }
}

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}
