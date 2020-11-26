import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recommend() {
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners')
      // 上面方式的语法糖
      topBanners: state.getIn(['recommend', 'topBanners'])
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
