/* eslint-disable semi */
/* eslint-disable quotes */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible/flexible"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引用element-ui组件开始
// import ElementUi from 'element-ui';
Vue.use(ElementUI)
// 引用element-ui组件结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
