// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAntd from 'vue-antd-ui'
import 'vue-antd-ui/dist/antd.css'
import './assets/css/reset.css'
// import './common/js/rem'

Vue.config.productionTip = false

Vue.use(VueAntd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})