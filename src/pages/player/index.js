import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>2</PlayerLeft>
        <PlayerRight>1</PlayerRight>
      </div>
    </PlayerWrapper>
  )
}

export default memo(Player)
