import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { isPC } from '@/utils'
Vue.prototype.isPC = isPC

import './global.less'
import 'lib-flexible'
import 'muse-ui/lib/styles/base.less'
import { Button, Select, AppBar, Icon, Menu, List, Popover, Avatar, BottomSheet, Paper, Pagination } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
Vue.use(Button)
Vue.use(Select)
Vue.use(AppBar)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(List)
Vue.use(Popover)
Vue.use(Avatar)
Vue.use(BottomSheet)
Vue.use(Paper)
Vue.use(Pagination)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
