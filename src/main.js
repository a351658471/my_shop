import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/font/iconfont.css'

axios.defaults.baseURL = "http://localhost:8081"

Vue.prototype.$http = axios

Vue.use(ElementUi)

//导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
