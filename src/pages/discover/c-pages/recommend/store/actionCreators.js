import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums, getRankList } from '@/services/recommend'

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
const changeRankListAction = (res, idx) => {
  const { playlist } = res
  switch (idx) {
    case 0:
      return {
        type: actionTypes.CHANGE_SOARING_LIST,
        soaringList: playlist
      }
    case 2:
      return {
        type: actionTypes.CHANGE_NEWSONG_LIST,
        newSongList: playlist
      }
    case 3:
      return {
        type: actionTypes.CHANGE_ORIGINAL_LIST,
        originalList: playlist
      }
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
export const getRankListAction = (idx) => {
  return (dispatch) => {
    getRankList(idx).then((res) => {
      dispatch(changeRankListAction(res, idx))
    })
  }
}
