import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
// 通过provider将store共享出去
import { Provider } from 'react-redux'

import store from './store'
import routes from '@/router'
import { HashRouter } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})
export default App
