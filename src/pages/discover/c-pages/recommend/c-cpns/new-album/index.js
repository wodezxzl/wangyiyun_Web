import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'
import { NEW_ALBUM_LIMIT } from '@/common/constants'

import { NewAlbumWrapper } from './style'
import { Carousel } from 'antd'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'

function NewAlbum() {
  // redux相关Hooks
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
  }, [dispatch])
  const pageRef = useRef()

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={(e) => pageRef.current.prev()} />
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <AlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={(e) => pageRef.current.next()} />
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
