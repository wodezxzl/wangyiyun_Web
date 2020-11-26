import React, { memo } from 'react'

import { getCount, getSizeImg } from '@/utils/data-format'

import { SongCoverWrapper } from './style'

function SongCover(props) {
  const {
    info: { picUrl, name, copywriter, nickname, playCount }
  } = props

  return (
    <SongCoverWrapper>
      <div className="top-img">
        <img src={getSizeImg(picUrl, 140)} alt="图片" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon headset" />
              {getCount(playCount)}
            </span>
            <i />
          </div>
        </div>
      </div>
      <div className="bottom-description text-nowrap">{name}</div>
      <div className="source text-nowrap">by{copywriter || nickname}</div>
    </SongCoverWrapper>
  )
}

export default memo(SongCover)
