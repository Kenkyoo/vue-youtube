import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PopularView from '../views/PopularView.vue'
import VideoView from '../views/VideoView.vue'
import HistoryView from '../views/HistoryView.vue'
import ChannelView from '../views/ChannelView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/videos/:id/:channel',
      name: 'videos',
      component: VideoView,
    },
    {
      path: '/channel/:id/',
      name: 'channel',
      component: ChannelView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
