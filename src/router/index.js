import React from 'react'
import { Redirect } from 'react-router-dom'

import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'
import Recommend from '@/pages/discover/c-pages/recommend'
import Rank from '@/pages/discover/c-pages/rank'
import Songs from '@/pages/discover/c-pages/songs'
import DjRadio from '@/pages/discover/c-pages/djRadio'
import Artist from '@/pages/discover/c-pages/artist'
import NewAlbum from '@/pages/discover/c-pages/newAlbum'

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
