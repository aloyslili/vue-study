import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'
// 把axios挂载在vue原型中
Vue.prototype.$axios = axios
axios.defaults.baseURL ='http://api.mm2018.com:8090'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
