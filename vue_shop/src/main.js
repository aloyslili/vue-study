import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式表
import './assets/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 引入axios并使用它
import axios from 'axios'
// 放在原型连上
Vue.prototype.$http = axios
// 配置请求路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
