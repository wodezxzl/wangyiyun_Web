import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from '@/pages/discover/c-pages/recommend/c-cpns/top-banner'
import HotRecommend from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/pages/discover/c-pages/recommend/c-cpns/new-album'
import RecommendRank from '@/pages/discover/c-pages/recommend/c-cpns/recommend-rank'

function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        {/* 左边部分 */}
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRank />
        </RecommendLeft>

        {/* 右边部分 */}
        <RecommendRight>2</RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
