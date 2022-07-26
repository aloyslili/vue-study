import Vue from 'vue'
import App from './App.vue'
// import { hunhe } from './mixin'
import router from './router'
import store from './store'
// 引入插件
import plugins from './plugings'
// 使用插件
Vue.use(plugins)
// 引入vuex
// import Vuex from 'vuex'

// 关闭vue产生的提示
Vue.config.productionTip = false
// 在Vue中使用混合
// Vue.mixin(hunhe)
// Vuex.use(Vuex);

new Vue({
  router,
  store,
// 将app组件放入容器中
  render: h => h(App)

  // render 是一个函数 是vue帮我们调用的
  // render 函数还可以创建一个节点，创建元素

  // render(a) {
  //   console.log(typeof a)
  // }

  // render(createElement) {
  //   return createElement('h1', '你好啊！')
  // }
}).$mount('#app')
