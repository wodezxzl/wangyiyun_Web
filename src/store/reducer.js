import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playReducer } from '@/pages/player/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  play: playReducer
})

export default cReducer
