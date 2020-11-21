import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '@/common/local-data'

import { Input } from 'antd'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

const Index = memo(() => {
  // 页面逻辑
  const showSelectItem = (item, index) => {
    // 根据index来判断到底渲染成路由还是普通a标签
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          {/* 三角形箭头图标 */}
          <i className="icon sprite_01" />
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/* 左边部分 */}
        <HeaderLeft>
          {/* LOGO */}
          <a href="#/" className="logo sprite_01" />
          {/* 顶部六个大分类 */}
          <ul className="selectList">
            {headerLinks.map((item, index) => {
              return (
                <li key={item.title} className="selectItem">
                  {showSelectItem(item, index)}
                </li>
              )
            })}
          </ul>
        </HeaderLeft>

        {/* 右边部分 */}
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <a href="#" className="authorCenter">
            创作者中心
          </a>
          <a href="#" className="login">
            登入
          </a>
        </HeaderRight>
      </div>
      <div className="divider" />
    </HeaderWrapper>
  )
})

export default Index
