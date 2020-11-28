import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRankListAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'

import { RecommendRankWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRank from '@/components/top-rank'

function RecommendRank() {
  // redux相关Hooks
  const { soaringList, newSongList, originalList } = useSelector(
    (state) => ({
      soaringList: state.getIn(['recommend', 'soaringList']),
      newSongList: state.getIn(['recommend', 'newSongList']),
      originalList: state.getIn(['recommend', 'originalList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他Hooks
  useEffect(() => {
    dispatch(getRankListAction(0))
    dispatch(getRankListAction(2))
    dispatch(getRankListAction(3))
  }, [dispatch])

  return (
    <RecommendRankWrapper>
      <ThemeHeaderRCM title="榜单推荐" />
      <div className="tops">
        <TopRank info={soaringList} />
        <TopRank info={newSongList} />
        <TopRank info={originalList} />
      </div>
    </RecommendRankWrapper>
  )
}

export default memo(RecommendRank)
