import * as actionTypes from './constants'
import { getSongDetail, getSongLyric } from '@/services/play'
import { parseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = (songs) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG_ACTION,
    currentSong: songs
  }
}
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST_ACTION,
  playList
})
const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX_ACTION,
  currentSongIndex
})
const changeLyricAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_ACTION,
  lyricList
})

export const changePlaySequenceAction = (playSequence) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE_ACTION,
  playSequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['play', 'playList'])
    const sequence = getState().getIn(['play', 'playSequence'])
    let currentSongIndex = getState().getIn(['play', 'currentSongIndex'])

    switch (sequence) {
      case 2: // 2:随机
        currentSongIndex = Math.floor(Math.random() * playList.length)
        break
      default:
        // 其他情况
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          // 下一曲到最后时直接赋值为0
          currentSongIndex = 0
        } else if (currentSongIndex < 0) {
          // 上一曲到最后时跳到最后一曲
          currentSongIndex = playList.length - 0
        }
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getSongLyricAction(currentSong.id))
  }
}

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX_ACTION,
  index
})

export function getSongDetailAction(ids) {
  return (dispatch, getState) => {
    // 1.判断playList中是否已经有了该歌曲
    const playList = getState().getIn(['play', 'playList'])
    const songIndex = playList.findIndex((song) => song.id === ids)

    // 2.判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      // 找到歌曲
      // 改变当前歌曲的index
      dispatch(changeCurrentSongIndexAction(songIndex))
      // 改变当前歌曲
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      // 请求歌词数据
      dispatch(getSongLyricAction(song.id))
    } else {
      // 没有找到歌曲
      // 请求相应歌曲数据
      getSongDetail(ids).then((res) => {
        song = res && res.songs && res.songs[0]
        if (!song) return

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
        // 3.请求歌词数据
        dispatch(getSongLyricAction(song.id))
      })
    }
  }
}

export function getSongLyricAction(id) {
  return (dispatch) => {
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyricList = parseLyric(lyricString)
      dispatch(changeLyricAction(lyricList))
    })
  }
}
