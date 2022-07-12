import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  // 设置重定向路由
  {
    path: '/',
    redirect: '/login'
  },
  // 定义路由规则
  {
    path: '/login',
    // comments: () => import( "../components/login.vue")
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
