import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'

import Element from 'element-ui'
import './styles/element-variables.scss'
import './styles/index.scss' // 全局样式

import baseComponents from './components/common/index'
Vue.use(baseComponents)


Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false






new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
