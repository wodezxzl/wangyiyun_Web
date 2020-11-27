import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend'

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
const changeNewAlbumAction = (res) => {
  const { albums } = res
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: albums
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
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
