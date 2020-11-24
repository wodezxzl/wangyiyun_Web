import * as actionTypes from './constants'
import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction = (res) => {
  const { banners } = res
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: banners
  }
}

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
