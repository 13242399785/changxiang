// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'

import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css';

Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.prototype.$axios = Axios
Vue.prototype.$qs = Qs

// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus() 
  }
})
//滚动跳转路由跳回顶端
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
//给路由标题
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
