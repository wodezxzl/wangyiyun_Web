import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from '@/pages/discover/c-pages/recommend/c-cpns/top-banner'
import HotRecommend from '@/pages/discover/c-pages/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/pages/discover/c-pages/recommend/c-cpns/new-album'

function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>2</RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
