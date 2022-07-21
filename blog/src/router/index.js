import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 路由配置，配置路由路径与组件的对应关系
const routes = [
  {
    path: '/',
    component:() => import('../components/ShowBlogs.vue')
  },
  {
    path: '/add',
    component: () => import('../components/AddMyBlog.vue')
  },
  {
      path: 'blog/:id',
      component: () => import('../components/SingleBlog.vue')
  }
]

// 新建路由实例
const router = new VueRouter({
  routes,
  // 哈希模式
  mode: "history"
})

// //导出路由实例，在main.js中导入使用
export default router
