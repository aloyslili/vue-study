import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    // 主路由 路由嵌套
    path: '/',
    component: Main,
    // 子路由
    children: [
      {path: 'home', component: Home},
      {path: 'user', component: User}
    ],
  },

]

const router = new VueRouter({
  routes
})

export default router
