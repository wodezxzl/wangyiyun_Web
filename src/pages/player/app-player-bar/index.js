import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider } from 'antd'

import { getSongDetailAction } from '@/pages/player/store/actionCreators'
import { formatDate, getMusicUrl, getSizeImg } from '@/utils/data-format'

import { AppPlayerBarWrapper, Control, Operate, PlayInfo } from './style'

function AppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0)
  // progress的改变会引起页面重绘,不能简简单单定义为一个常量
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux相关Hooks
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['play', 'currentSong'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hooks
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  // 当歌曲没有发生改变时,只需要拿到一次src
  useEffect(() => {
    audioRef.current.src = getMusicUrl(id)
  }, [currentSong])

  // 逻辑代码
  const picUrl = currentSong && currentSong.al && currentSong.al.picUrl
  // 之前这里没有取name,所以会报一个错误:(将对象渲染到html中)
  const singerName = currentSong && currentSong.ar && currentSong.ar[0].name
  const songName = currentSong && currentSong.name
  const dt = currentSong && currentSong.dt
  const id = currentSong && currentSong.id
  const showDuration = formatDate(dt, 'mm:ss')
  const audioRef = useRef()
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  // handle function
  // 1.点击播放音乐
  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }, [isPlaying])
  // 2.音乐播放后时间更新时进行回调
  function TimeUpDate(e) {
    if (!isChanging) {
      // 只有当没有拖动滑块时进度和当前播放时间才随时间变化
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / dt) * 100)
    }
  }
  // 3.滑块发生改变
  const slideChange = useCallback((value) => {
    setIsChanging(true)
    // 滑块开始改变时,同时改变播放时间
    const currentTime = (value / 100) * dt
    setCurrentTime(currentTime)
    setProgress(value)
  }, [])
  // 4.滑块停止滑动时
  const slideAfterChange = useCallback(
    (value) => {
      let currentTime = ((value / 100) * dt) / 1000
      audioRef.current.currentTime = currentTime
      // 这里马上设置一次正确的currentTime,不然可能有一定延迟TimeUpDate函数还会使用一些之前的currentTime
      // 造成进度条有一个回弹现象
      // currentTime得到的是一个毫秒数,需要的是一个秒数
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)

      if (!isPlaying) {
        // 拖动停止时开始播放音乐
        playMusic()
      }
    },
    [dt, isPlaying, playMusic]
  )

  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        {/* 左边快关控制 */}
        <Control className="sprite_player" isPlaying={isPlaying}>
          <button className="sprite_player prev" />
          <button className="sprite_player play" onClick={() => playMusic()} />
          <button className="sprite_player next" />
        </Control>

        {/* 中间播放条信息 */}
        <PlayInfo>
          {/* 左边小图片 */}
          <div className="image">
            <a href="#">
              <img src={getSizeImg(picUrl, 35)} alt="" />
            </a>
          </div>

          {/* 右边控制条 */}
          <div className="info">
            <div className="song">
              <a href="#" className="song-name">
                {songName}
              </a>
              <i className="MV-icon sprite_player" />
              <a href="#" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={slideChange}
                onAfterChange={slideAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        {/* 右边歌曲操作相关 */}
        <Operate>
          <div className="left">
            <button className="sprite_player btn favor" />
            <button className="sprite_player btn share" />
          </div>
          <div className="right">
            <button className="sprite_player btn volume" />
            <button className="sprite_player btn loop" />
            <button className="sprite_player btn playlist" />
          </div>
        </Operate>

        {/* 音乐播放 */}
        <audio ref={audioRef} onTimeUpdate={TimeUpDate} />
      </div>
    </AppPlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
