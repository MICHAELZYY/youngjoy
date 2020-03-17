// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueHighlightJS from 'vue-highlightjs'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import api from './request/api/index'

// axios.defaults.baseURL = process.env.BASE_URL

Vue.config.productionTip = false;
Vue.prototype.$api = api;

Vue.use(VueHighlightJS)
/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



