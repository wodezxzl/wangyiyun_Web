import { Map } from 'immutable'
import * as actionTypes from '@/pages/player/store/constants'
const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  playSequence: 1, // 1:单曲 2:随机 3:顺序
  lyricList: [],
  currentLyricIndex: 0,
  currentSong: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG_ACTION:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST_ACTION:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX_ACTION:
      return state.set('currentSongIndex', action.currentSongIndex)
    case actionTypes.CHANGE_PLAY_SEQUENCE_ACTION:
      return state.set('playSequence', action.playSequence)
    case actionTypes.CHANGE_LYRIC_ACTION:
      return state.set('lyricList', action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX_ACTION:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer
