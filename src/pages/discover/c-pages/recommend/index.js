import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recommend() {
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return <div>Recommend: {topBanners.length}</div>
}

export default memo(Recommend)
