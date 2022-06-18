import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

import { isPC } from '@/utils'
Vue.prototype.isPC = isPC
Vue.prototype.avatar = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F93883e3013357c785539962e9ce4c366cfd7b2e8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658080692&t=e92666b676e97b7cb580fb7d0c342f8a"

import './global.less'
import 'lib-flexible'
import 'muse-ui/lib/styles/base.less'
import Toast from "muse-ui-toast"
import { Button, Select, AppBar, Icon, Menu, List, Popover, Avatar, BottomSheet, Paper, Pagination, Chip, Carousel, Card, Tooltip, Snackbar, TextField, Dialog, Divider, Badge, Form } from 'muse-ui'
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
Vue.use(Chip)
Vue.use(Carousel)
Vue.use(Card)
Vue.use(Tooltip)
Vue.use(Snackbar)
Vue.use(TextField)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Badge)
Vue.use(Form)

Vue.use(Toast, {
  position: "top", // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: "close", // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: "check_circle", // 成功信息图标
  infoIcon: "info", // 信息信息图标
  warningIcon: "priority_high", // 提醒信息图标
  errorIcon: "warning", // 错误信息图标
})

import Helpers from 'muse-ui/lib/Helpers'

Vue.use(Helpers)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F93883e3013357c785539962e9ce4c366cfd7b2e8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658080692&t=e92666b676e97b7cb580fb7d0c342f8a',
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F93883e3013357c785539962e9ce4c366cfd7b2e8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658080692&t=e92666b676e97b7cb580fb7d0c342f8a',
  attempt: 1
})

import * as filters from './filter'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k])) // 注册过滤器
// 挂到原型上就可以在模板上直接使用，也可以在js里用this调用
Vue.prototype.filterDate = filters.filterDate

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
