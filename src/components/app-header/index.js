import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '@/common/local-data'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import { Input } from 'antd'

const Index = memo(() => {
  // 页面逻辑
  const showSelectItem = (item, index) => {
    // 根据index来判断到底渲染成路由还是普通a标签
    if (index < 3) {
      return (
        <NavLink to={item.link}>
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
          {/* 这里不给内容可能会报一个警告,所以给个值也便于SEO优化,设置text-indent解决问题 */}
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
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
