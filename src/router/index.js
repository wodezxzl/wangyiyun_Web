import React from 'react'
import { Redirect } from 'react-router-dom'

// 使用懒加载进行优化
const Discover = React.lazy(() => import('@/pages/discover'))
const Mine = React.lazy(() => import('@/pages/mine'))
const Friend = React.lazy(() => import('@/pages/friend'))
const Recommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'))
const Rank = React.lazy(() => import('@/pages/discover/c-pages/rank'))
const Songs = React.lazy(() => import('@/pages/discover/c-pages/songs'))
const DjRadio = React.lazy(() => import('@/pages/discover/c-pages/djRadio'))
const Artist = React.lazy(() => import('@/pages/discover/c-pages/artist'))
const NewAlbum = React.lazy(() => import('@/pages/discover/c-pages/newAlbum'))
const Player = React.lazy(() => import('@/pages/player'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/rank',
        component: Rank
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djRadio',
        component: DjRadio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/newAlbum',
        component: NewAlbum
      },
      {
        path: '/discover/player',
        component: Player
      }
    ]
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
