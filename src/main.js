import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import RenderForm from './views/RenderForm'
import Grid from './views/Grid'
import Table from './views/Table'
Vue.component('render-form', RenderForm)
Vue.component('grid', Grid)
Vue.component('render-table', Table)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
