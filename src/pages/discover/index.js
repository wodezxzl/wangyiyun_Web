import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverWrapper } from './style'
import request from '@/services/request'

const Index = memo((props) => {
  useEffect(() => {
    request({
      url: '/banner'
    }).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <DiscoverWrapper>
      <ul className="topMenu wrap-v1">
        {dicoverMenu.map((item) => {
          return (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})

export default Index
