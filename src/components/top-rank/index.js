import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImg } from '@/utils/data-format'
import { getSongDetailAction } from '@/pages/player/store/actionCreators'

import { TopRankWrapper } from './style'

function TopRank(props) {
  // props add state
  const {
    info: { coverImgUrl, name, tracks = [] }
  } = props

  // redux Hooks
  const dispatch = useDispatch()

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

  return (
    <TopRankWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImg(coverImgUrl)} alt="" />
          <a href="#" className="image_cover" />
        </div>

        <div className="info">
          <a href="#">{name}</a>
          <div>
            <div className="btn play sprite_02" />
            <div className="btn favor sprite_02" />
          </div>
        </div>
      </div>

      <div className="lists">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>

              <div className="info">
                <a href="#" className="name text-nowrap">
                  {item.name}
                </a>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={(e) => playMusic(item)} />
                  <button className="btn sprite_icon2 addTo" />
                  <button className="btn sprite_02 favor" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="footer">
        <a href="#">查看全部 &gt;</a>
      </div>
    </TopRankWrapper>
  )
}

export default memo(TopRank)
