import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { HotRecommendWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongCover from '@/components/song-cover'

function HotRecommend() {
  // 与redux相关Hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
