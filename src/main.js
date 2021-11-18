import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'
import $ from 'jquery'
import 'lib-flexible'
import 'fullpage.js/vendors/scrolloverflow'
Vue.prototype.$vconsole = VConsole
import VueFullPage from 'vue-fullpage.js'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'
// Vue.prototype.$video = Video
import './utils/jsmpeg.min.js'
// import JSMpeg from 'jsmpeg-player';
Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
