import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { ThemeHeaderRCMWrapper } from './style'

const ThemeHeaderRCM = function (props) {
  const { title, keywords } = props

  return (
    <ThemeHeaderRCMWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <ul className="keyword">
          {keywords.map((item, index) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
                <span className="divider">{keywords.length - 1 === index ? null : '|'}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="right">
        <a href="#">更多</a>
        <i className="icon sprite_02" />
      </div>
    </ThemeHeaderRCMWrapper>
  )
}

ThemeHeaderRCM.prototype = {
  title: PropTypes.string,
  keywords: PropTypes.array
}
ThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default memo(ThemeHeaderRCM)
