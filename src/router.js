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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
