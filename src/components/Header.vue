<template>
  <div class="header">
    <mu-appbar
      style="width: 100%;"
      :color="background"
    >
      <!-- 昵称 -->
      <span style="cursor: pointer;">Dinosaur-Egg </span>
      <!-- 头像 -->
      <!-- <mu-avatar
        slot="left"
        :size="50"
        class="header-avatar"
      >
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0703%2Fbe034d4aj00qvmr2n001kc000g400kic.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658047907&t=b1bcb17bf5d75371ae61785f1358e504"
          alt=""
        >
      </mu-avatar> -->
      <mu-button
        @click="go(item)"
        v-show="isPC"
        flat
        slot="right"
        v-for="(item,index) in info.menu"
        :key="item.name"
        :color="lightIndex === index ? '#00e676' : '' "
      >
        <mu-icon
          size="16"
          :value="item.icon"
        ></mu-icon>
        {{item.name}}
      </mu-button>

      <!-- 移动端菜单 -->
      <mu-button
        v-show="!isPC"
        slot="left"
        icon
        @click="toggleWapMenu(true)"
      >
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-bottom-sheet :open.sync="openWapMenu">
        <mu-list @item-click="toggleWapMenu(false)">
          <mu-list-item
            @click="go(item)"
            button
            v-for="(item,index) in info.menu"
            :key="item.name"
          >
            <mu-list-item-action>
              <mu-icon
                :value="item.icon"
                :color="lightIndex === index ? '#00e676' : '' "
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title :style="{color:lightIndex === index ? '#00e676' : ''}">{{item.name}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
      <!-- 主题切换 -->
      <mu-button
        flat
        slot="right"
        ref="theme"
        @click="openTheme = !openTheme"
      >
        <mu-icon value="color_lens"></mu-icon>
      </mu-button>
      <mu-popover
        :open.sync="openTheme"
        :trigger="triggerTheme"
      >
        <mu-list>
          <mu-list-item
            button
            @click="toggleTheme('selfLight')"
          >
            <mu-list-item-title>
              <mu-icon
                :color="me === 'selfLight' ? 'primary': '' "
                value="brightness_7"
              ></mu-icon>
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item
            button
            @click="toggleTheme('selfDark')"
          >
            <mu-list-item-title>
              <mu-icon
                :color="me === 'selfDark' ? 'primary': '' "
                value="brightness_4"
              ></mu-icon>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>

      <!-- 用户 -->
      <mu-button
        flat
        slot="right"
        ref="user"
        @click="openUser = !openUser"
      >
        <div class="user">
          <span>izumi123123</span>
          <mu-icon value="expand_more"></mu-icon>
        </div>
      </mu-button>
      <mu-popover
        :open.sync="openUser"
        :trigger="triggerUser"
      >
        <mu-list>
          <mu-list-item
            button
            @click="$router.push({
              name: 'user'
            })"
          >
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出登陆</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-appbar>

    <!-- 登陆弹框 -->
    <div class="tool">
      <div
        class="tool-row"
        v-if="info.login && !user"
      >
        <mu-slide-left-transition>
          <mu-button
            v-show="showToolBtn"
            fab
            color="primary"
            @click="openLoginModal=true;showToolBtn=false"
          >
            登陆
          </mu-button>
        </mu-slide-left-transition>
      </div>
      <div class="tool-row">
        <mu-tooltip
          placement="right-start"
          content="登陆/注册/搜索"
        >
          <mu-button
            color="info"
            fab
            @click="showToolBtn = !showToolBtn"
            class="search-fab"
          >
            <mu-icon vlaue="adb"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-slide-left-transition>
          <mu-button
            fab
            color="error"
            @click="openSearchModal=true;showToolBtn=false"
            v-show="
            showToolBtn
            &&
            info.openSearch"
          >
            搜索
          </mu-button>
        </mu-slide-left-transition>
      </div>
      <div
        class="tool-row"
        v-if="info.register && !user"
      >
        <mu-slide-bottom-transition>
          <mu-button
            fab
            color="warning"
            v-show="showToolBtn"
            @click="openRegisterModal=true; showToolBtn=false"
          >
            注册
          </mu-button>
        </mu-slide-bottom-transition>
      </div>
    </div>
    <RegisterForm
      :open="openRegisterModal"
      @toggle="toggleRegisterModal"
    ></RegisterForm>
    <LoginForm
      :open="openLoginModal"
      @toggle="toggleLoginModal"
    ></LoginForm>
    <SearchForm
      :open="openSearchModal"
      @toggle="toggleSearchModal"
    ></SearchForm>

    <mu-slide-bottom-transition>
      <mu-tooltip
        placement="top"
        content="Top"
      >
        <mu-button
          fab
          @click="scrollTop"
          v-show="showBackTop"
          class="back-top"
          color="secondary"
        >
          <mu-icon value="arrow_upward"></mu-icon>
        </mu-button>
      </mu-tooltip>
    </mu-slide-bottom-transition>
  </div>
</template>

<script>
const menus = [
  {
    name: "首页",
    router: "index",
    icon: "home",
  },
  {
    name: "文章",
    router: "articles",
    icon: "note_add",
  },
  {
    name: "归档",
    router: "archives",
    icon: "drafts",
  },
  {
    name: "分类",
    router: "categories",
    icon: "dns",
  },
  {
    name: "标签",
    router: "tags",
    icon: "loyalty",
  },
  {
    name: "关于",
    router: "about",
    icon: "perm_identity",
  }
]
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import SearchForm from './SearchForm'
export default {
  props: {
    lightIndex: {
      type: Number,
      default: 0
    },
    background: {
      type: String
    }
  },
  components: {
    RegisterForm,
    LoginForm,
    SearchForm
  },
  data() {
    return {
      info: {
        menu: menus,
        login: true,
        register: true,
        openSearch: true
      },
      openTheme: false,
      triggerTheme: null,
      openUser: false,
      triggerUser: null,
      openWapMenu: false,
      showToolBtn: false,
      user: null && JSON.parse(localStorage.getItem('user')),
      openRegisterModal: false,
      openLoginModal: false,
      openSearchModal: false,
      showBackTop: false,
      me: ''
    }
  },
  mounted() {
    this.triggerTheme = this.$refs.theme.$el
    this.triggerUser = this.$refs.user.$el,
      window.onscroll = () => {
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.showBackTop = true
        } else {
          this.showBackTop = false
        }
      }
    this.initTheme()
  },
  methods: {
    toggleWapMenu(bool) {
      this.openLoginModal = bool
    },
    toggleRegisterModal(bool) {
      this.openRegisterModal = bool
    },
    toggleLoginModal(bool) {
      this.openLoginModal = bool
    },
    toggleSearchModal(bool) {
      this.openSearchModal = bool
    },
    go(item) {
      // 当前路由跟跳转路由相同 则取消跳转
      if (this.$route.name === item.router) return
      this.$router.push({
        name: item.router
      })
    },
    scrollTop() {
      document.body.scrollIntoView({ block: 'start', behavior: "smooth" })
    },
    toggleTheme(me) {
      this.theme.use(me)
      this.me = me
      localStorage.setItem('theme', me)
      this.openTheme = false
    },
    initTheme() {
      const hours = new Date().getHours()
      let defaultTheme = ''
      if (hours >= 8 && hours <= 18) {
        defaultTheme = 'selfLight'
      } else {
        defaultTheme = 'selfDark'
      }
      this.me = localStorage.getItem('theme') || defaultTheme
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 1501;
  width: 100%;
  top: 0;
}
.header-avatar {
  margin-left: 20px;
  cursor: pointer;
}
.mu-appbar {
  .mu-flat-button {
    flex: 1;
  }
  /deep/ .mu-appbar-right {
    flex: 1;
  }
}
.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: block;
    width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
  }
}
.tool {
  position: fixed;
  left: 0;
  bottom: 2.6667rem;
  .tool-row {
    margin-top: 20px;
    height: 56px;
    .search-fab {
      margin-left: -28px;
      margin-right: 20px;
    }
  }
}
.back-top {
  position: fixed;
  right: 0.26667rem;
  bottom: 0.4rem;
  background: #595959;
}
</style>