import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Topic from '../views/Topic.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true,
  },
  // 歌单详情
  { path: '/home/listDetail/:id', name: 'ListDetail', component: () => import('../views/Home/ListDetail.vue') },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  },
  { path: '/play/:id/:song/:singer/:image', name: 'Player', component: () => import('../views/Player/Player.vue') },
  { path: '/singerList', name: 'singerList', component: () => import('../views/Cate/singList.vue') },
  // 歌手详情
  { path: '/singerDetail/:id', name: 'singerDetail', component: () => import('../views/Singer/singerDetail.vue') },
  // 歌单分类
  { path: '/songList', name: 'songList', component: () => import('../views/Cate/songList.vue') },
  // 新歌速递
  {
    path: '/newSong', name: 'newSong', component: () =>
      import('../views/Cate/newSong.vue')
  },
  // 热门电台
  {
    path: '/hotDJ', name: 'hotDJ', component: () =>
      import('../views/Cate/hotDJ.vue')
  },
  // 电台详情
  {
    path: '/djDetail/:rid', name: 'djDetail', component: () =>
      import('../components/DJDetail.vue')
  },
  // 专辑详情
  {
    path: '/album/:id', name: 'albumDetail', component: () => import('../views/Album/AlbumDetail.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: 'active'
})

export default router
