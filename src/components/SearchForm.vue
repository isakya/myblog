<template>
  <div>
    <mu-dialog
      :fullscreen="!isPC"
      width="60%"
      :open.sync="open"
    >
      <mu-auto-complete
        action-icon="search"
        label-float
        :data="keywords"
        label="文章搜索"
        :max-search-results="20"
        v-model="keyword"
        open-on-focus
        avatar
        full-width
        @change="handleSearch"
      >
        <template slot-scope="scope">
          <mu-list-item-action>
            <mu-avatar color="primary">
              {{scope.item.substring(0, 1)}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
        </template>
      </mu-auto-complete>
      <div
        v-if="list && list.length === 0"
        class="no-content"
      >暂无内容</div>
      <mu-list
        v-else
        class="list"
        textline="two-line"
      >
        <mu-list-item
          v-for="item in list"
          :key="item._id"
          button
          @click="goDetail(item)"
        >
          <mu-list-item-action>
            <mu-avatar>
              <img
                :src="item.cover"
                alt=""
              >
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>
              {{item.title}}
            </mu-list-item-title>
            <mu-list-item-sub-title>
              <span>
                {{item.introduction}}
              </span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action style="min-width: 140px;">
            {{item.creteTime | filterDate}}
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-button
        v-if="!isPC"
        class="close"
        icon
        @click="clear(false)"
      >
        <mu-icon value="close"></mu-icon>
      </mu-button>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [
        {
          categories: "技术",
          collect: 0,
          comment: 0,
          content:
            "### 1.toRefs↵把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref↵↵`应用`: ",
          cover: "http://nevergiveupt.top/vue/vue_composition_api.jpeg",
          createTime: 1611739740,
          introduction:
            "toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。",
          isCollect: true,
          isComment: true,
          isLike: true,
          isReward: false,
          like: 0,
          publishStatus: 1,
          sort: 0,
          status: 1,
          tags: ["Vue"],
          title: "Vue3.x-toRefs & shallowReactive & shallowRef & shallowReadonly",
          updateTime: 1611739813,
          views: 5,
          _id: "6011325cc4ae0128013d3210",
        },
        {
          categories: "技术",
          collect: 0,
          comment: 0,
          content:
            "### 1.注册GitHub账号并创建一个OAuth Apps↵↵登录GitHub账号然后右上角找到你的头像点击",
          cover: "http://nevergiveupt.top/egg/github_signin.png",
          createTime: 1612341189,
          introduction:
            "『登录鉴权』 是一个常见的业务场景，包括『账号密码登录方式』和『第三方统一登录』。其中，后者我们经常使用到，如 Google， GitHub，QQ 统一登录，它们都是基于 OAuth 规范。",
          isCollect: true,
          isComment: true,
          isLike: true,
          isReward: true,
          like: 1,
          publishStatus: 1,
          sort: 0,
          status: 1,
          tags: ["Node.js", "Egg"],
          title: "使用Egg通过GitHub来实现用户登录",
          updateTime: 1612341807,
          views: 6,
          _id: "601a5fc5e268db458626523d",
        }
      ],
      keyword: '',
      keywords: [
        { "createTime": 1598256377, "updateTime": 0, "articleNum": 1, "status": true, "_id": "5f4374f994c942f8bc6daa94", "name": "CSS" }, { "createTime": 1598256386, "updateTime": 0, "articleNum": 2, "status": true, "_id": "5f43750294c942f8bc6daa95", "name": "ES6" }, { "createTime": 1598256390, "updateTime": 0, "articleNum": 2, "status": true, "_id": "5f43750694c942f8bc6daa96", "name": "ES7" }, { "createTime": 1598256402, "updateTime": 0, "articleNum": 5, "status": true, "_id": "5f43751294c942f8bc6daa97", "name": "JS" }, { "createTime": 1598256406, "updateTime": 0, "articleNum": 9, "status": true, "_id": "5f43751694c942f8bc6daa98", "name": "TS" }, { "createTime": 1598256420, "updateTime": 0, "articleNum": 1, "status": true, "_id": "5f43752494c942f8bc6daa99", "name": "Markdown" }, { "createTime": 1598256431, "updateTime": 0, "articleNum": 1, "status": true, "_id": "5f43752f94c942f8bc6daa9a", "name": "Taro" }, { "createTime": 1598256435, "updateTime": 0, "articleNum": 7, "status": true, "_id": "5f43753394c942f8bc6daa9b", "name": "Vue" }, { "createTime": 1598256440, "updateTime": 0, "articleNum": 2, "status": true, "_id": "5f43753894c942f8bc6daa9c", "name": "Git" }, { "createTime": 1598256456, "updateTime": 0, "articleNum": 4, "status": true, "_id": "5f43754894c942f8bc6daa9d", "name": "React" }, { "createTime": 1598256470, "updateTime": 0, "articleNum": 3, "status": true, "_id": "5f43755694c942f8bc6daa9e", "name": "小程序" }, { "createTime": 1598279503, "updateTime": 0, "articleNum": 0, "status": true, "_id": "5f43cf4f89ea670e663101a7", "name": "恋爱技巧" }, { "createTime": 1598279508, "updateTime": 0, "articleNum": 0, "status": true, "_id": "5f43cf5489ea670e663101a8", "name": "护肤" }, { "createTime": 1598280337, "updateTime": 0, "articleNum": 1, "status": true, "_id": "5f43d29189ea670e663101c4", "name": "健康" }, { "createTime": 1599555515, "updateTime": 0, "articleNum": 8, "status": true, "_id": "5f5747bb89ea670e663104b1", "name": "服务器" }, { "createTime": 1612341738, "updateTime": 0, "articleNum": 1, "status": true, "_id": "601a61eae268db458626525e", "name": "Egg" }, { "createTime": 1612341788, "updateTime": 0, "articleNum": 1, "status": true, "_id": "601a621ce268db458626525f", "name": "Node.js" }, { "createTime": 1612404112, "updateTime": 0, "articleNum": 0, "status": true, "_id": "601b5590e268db45862652a9", "name": "Canvas" }, { "createTime": 1612404123, "updateTime": 0, "articleNum": 0, "status": true, "_id": "601b559be268db45862652aa", "name": "Pdf.js" }, { "createTime": 1620474685, "updateTime": 0, "articleNum": 0, "status": true, "_id": "60967b3dc4b76ef12cd14bac", "name": "贷款" }, { "createTime": 1652758653, "updateTime": 1652758732, "articleNum": 0, "status": true, "_id": "6283187dfa1692ad31aeab50", "name": "antd" }, { "createTime": 1652758795, "updateTime": 0, "articleNum": 0, "status": true, "_id": "6283190bfa1692ad31aeab59", "name": "elementUI" }, { "createTime": 1653269233, "updateTime": 0, "articleNum": 1, "status": true, "_id": "628ae2f1fa1692ad31aeb032", "name": "RegExp" }
      ],
    }
  },
  mounted() {
    this.keywords = this.keywords.map(item => item.name)
    console.log(this.keywords)
  },
  methods: {
    handleSearch() {
      if (!this.keyword) return
      console.log(this.keyword)
    },
    clear(val) {
      this.keyword = '',
        this.list = []
      this.$emit('toggle', val)
    },
    goDetail(item) {
      this.clear()
      this.$router.push({
        name: 'articlesDetails',
        query: {
          id: item._id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  max-height: 450px;
  overflow-y: auto;
}
.no-content {
  text-align: center;
}
.close {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>