import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  soaringList: {},
  newSongList: {},
  originalList: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_SOARING_LIST:
      return state.set('soaringList', action.soaringList)
    case actionTypes.CHANGE_NEWSONG_LIST:
      return state.set('newSongList', action.newSongList)
    case actionTypes.CHANGE_ORIGINAL_LIST:
      return state.set('originalList', action.originalList)
    default:
      return state
  }
}

export default reducer
