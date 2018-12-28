// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// 在build下的webpack.base.conf.js里面resolve里面配置styles变量指向src/assets/styles
// 此修改需重启项目

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
