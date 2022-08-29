import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mytab from '../components/myTab.vue'
import computed from '../components/Computed.vue'
import watch from '../components/watch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/mytab',
    name:'mytab',
    component: mytab
  },
  {
    path:'/computed',
    name: 'computed',
    component: computed
  },
  {
    path:'/watch',
    name: 'watch',
    component: watch
  }

]

const router = new VueRouter({
  routes
})

export default router
