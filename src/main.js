import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
// 一定记得安装 axios
import axios from 'axios'
// element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.axios = axios;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
