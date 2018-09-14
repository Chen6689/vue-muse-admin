// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-message/dist/muse-ui-message.css';
import 'muse-ui-progress/dist/muse-ui-progress.css';

import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import router from './router'
import VueParticles from 'vue-particles'
import Api from './api'
import Loading from 'muse-ui-loading'
import Message from 'muse-ui-message'
import Toast from 'muse-ui-toast'
import NProgress from 'muse-ui-progress'

//全局引入muse-ui
Vue.use(MuseUI)
Vue.use(VueParticles)
Vue.use(Loading);
Vue.prototype.$https = Api
Vue.prototype.$message = Message
Vue.prototype.$toast = Toast
Vue.prototype.$nProgress = NProgress
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
