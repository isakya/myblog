import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Index.vue')
  },
  {
    path: '/archives',
    name: 'archives',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Archives/Index.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Categories/Index.vue')
  },
  {
    path: '/categories/details',
    name: 'categoriesDetails',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Categories/Details.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Tags/Index.vue')
  },
  {
    path: '/tags/details',
    name: 'tagsDetails',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Tags/Details.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/Index.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Articles/Index.vue')
  },
  {
    path: '/articles/details',
    name: 'articlesDetails',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Articles/Details.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '@/views/User/Index.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
