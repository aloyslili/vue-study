import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/record',
        component: () => import('@/views/Record/index.vue')
      },
      {
        path: '/mine',
        component: () => import('@/views/Mine/index.vue')
      },
    ]
  },
  {
    path: '/form/income',
    component: () => import('@/views/form/Income/index.vue')
  },
  {
    path: '/form/outlay',
    component: () => import('@/views/form/Outlay/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
