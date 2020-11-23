import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: () => import(/* webpackChunkName: "stories" */ '../views/Stories.vue')
  },
  {
    path: '/StoryView/:story_id',
    name: 'StoryView',
    component: () => import(/* webpackChunkName: "stories" */ '../views/StoryView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
