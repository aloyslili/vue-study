import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'


Vue.config.productionTip = false

Vue.use(VueResource)
// 自定义组件
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    // 随机生成标题颜色
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})
Vue.directive('theme', {
  bind(el, binding, vnode) {
    // 绑定的值是否存在，是否有意义
    if(binding.value == 'wide') {
      el.style.maxWidth = '800px';
    } else if(binding.value == 'narrow'){
      el.style.maxWidth = '500px';
    }
    if(binding.arg == 'column') {
      el.style.background = "#6677cc";
      el.style.padding = "20px"
    }
  }
})

// 定义全局过滤器
// Vue.filter("to-uppercase", function(value) {
//   return value.toUpperCase();
// })

Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + '...';
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
