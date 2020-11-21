import React, { memo } from 'react'

import { footerImages, footerLinks } from '@/common/local-data'
import { FooterLeft, FooterRight, FooterWrapper } from './style'

const Index = memo(() => {
  // jsx
  return (
    <FooterWrapper>
      <div className="content wrap-v1">
        {/* 左边链接部分 */}
        <FooterLeft>
          {footerLinks.map((item) => {
            return (
              <a href={item.link} key={item.title}>
                {item.title}
              </a>
            )
          })}
          <p>
            网易公司版权所有©1997-2020
            <span>
              杭州乐读科技有限公司运营:
              <a href="#">浙网文[2018]3506-263号</a>
            </span>
          </p>
          <p>
            违法和不良信息举报电话：0571-89853516
            <span>
              举报邮箱：
              <a href="#">ncm5990@163.com</a>
            </span>
          </p>
          <p>
            粤B2-20090191-18
            <span>
              <a href="#">工业和信息化部备案管理系统网站</a>
            </span>
            <i />
            <a href="#">浙公网安备 33010902002564号</a>
          </p>
        </FooterLeft>

        {/* 右边图标部分 */}
        <FooterRight>
          {footerImages.map((item) => {
            return (
              <a href={item.link} key={item.link}>
                <i />
                <span>{item.des}</span>
              </a>
            )
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})

export default Index
