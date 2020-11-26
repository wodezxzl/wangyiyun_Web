import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/pages/discover/c-pages/recommend/c-cpns/top-banner/style'
import { Carousel } from 'antd'

function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 与Redux相关Hooks
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners')
      // 上面方式的语法糖
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hooks
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerRef = useRef()
  const bannerChange = useCallback((form, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他逻辑
  const bgImage =
    topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {topBanners.map(({ imageUrl, typeTitle }) => {
              return (
                <div className="banner-item" key={imageUrl}>
                  <img src={imageUrl} alt={typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={(e) => bannerRef.current.prev()} />
          <button className="btn right" onClick={(e) => bannerRef.current.next()} />
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
