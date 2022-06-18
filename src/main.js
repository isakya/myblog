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
import { Button, Select, AppBar, Icon, Menu, List, Popover, Avatar, BottomSheet, Paper, Pagination, Chip, Carousel, Card, Tooltip, Snackbar, TextField, Dialog, Divider, Badge, Form, AutoComplete } from 'muse-ui'
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
Vue.use(AutoComplete)

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
// 主题切换
import Helpers from 'muse-ui/lib/Helpers'
import theme from 'muse-ui/lib/theme'
theme.add('selfDark', {
  primary: '#00e676',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#757575',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: '#424242',
    chip: '#616161',
    default: '#303030'
  }
}, 'dark')
theme.add('selfLight', {
  primary: '#00e676',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#bdbdbd',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'gba(0, 0, 0, 0.54)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    chip: '#e0e0e0',
    default: '#fafafa'
  }
}, 'light')
const hours = new Date().getHours()
let defaultTheme = ''
if (hours >= 8 && hours <= 18) {
  defaultTheme = 'selfLight'
} else {
  defaultTheme = 'selfDark'
}
const selfTheme = localStorage.getItem('theme') || defaultTheme
theme.use(selfTheme)
Vue.prototype.theme = theme


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
