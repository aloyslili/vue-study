import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// vue的按需引入的方法
import { Aside, Row, Container,Header,Main,
  Submenu,Menu,MenuItem,MenuItemGroup } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Row);
Vue.use(Container);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
