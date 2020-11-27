import React, { memo } from 'react'

import { getSizeImg } from '@/utils/data-format'

import { AlbumCoverWrapper } from './style'

function AlbumCover(props) {
  const {
    info: { picUrl, artist, name },
    size = 130,
    width = 153,
    bgp = '-845px'
  } = props

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImg(picUrl, size)} alt="" />
        <a href="#" className="cover image_cover">
          {name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{name}</div>
        <div className="artist">{artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
}

export default memo(AlbumCover)
