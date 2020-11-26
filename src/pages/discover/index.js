import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style'

const Index = memo((props) => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <li key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})

export default Index
