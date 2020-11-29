import * as actionTypes from './constants'
import { getSongDetail } from '@/services/play'

const changeCurrentSongAction = (songs) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG_ACTION,
    currentSong: songs
  }
}

export function getSongDetailAction(ids) {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      const { songs } = res
      dispatch(changeCurrentSongAction(songs[0]))
    })
  }
}
