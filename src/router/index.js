import React from 'react'
import { Redirect } from 'react-router-dom'

import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/mine',
    exact: true,
    component: Mine
  },
  {
    path: '/friend',
    exact: true,
    component: Friend
  }
]

export default routes
