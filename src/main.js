import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
Vue.use(Button)
Vue.use(Select)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
