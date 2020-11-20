import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
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
