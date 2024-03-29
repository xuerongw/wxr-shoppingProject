import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant.js'

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
