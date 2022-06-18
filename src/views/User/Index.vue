<template>
  <div class="user">
    <mu-card class="slider-card">
      <mu-button
        color="grey600"
        class="edit"
        @click="openUpdateModal = true"
        icon
      >
        <mu-icon
          value="edit"
          left
        ></mu-icon>
      </mu-button>
      <mu-avatar
        class="avatar"
        size="100"
      >
        <img v-lazy="userInfo.avatar">
        <input
          type="file"
          class="file"
          accept="image/*"
          @change="uploadFile"
        >
      </mu-avatar>
      <div class="title">{{userInfo.nickName}}</div>
      <div class="email">{{userInfo.email}}</div>
      <div class="desc">{{userInfo.introduction}}</div>
    </mu-card>

    <UpdateUserForm
      :userInfo="userInfo"
      :open="openUpdateModal"
      @toggle="toggleUpdateModal"
    ></UpdateUserForm>

    <div class="right">
      <mu-appbar class="title">
        <mu-button
          icon
          slot="left"
          @click="$router.go(-1)"
        >
          <mu-icon
            value="arrow_back"
            left
          ></mu-icon>
        </mu-button>
        我的收藏
        <mu-menu
          slot="right"
          open-on-hover
        >
          <mu-button icon>
            <mu-icon value="menu">
            </mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item
              button
              @click="cancelCollect(null)"
            >
              <mu-list-item-title>
                一键取消
              </mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
      <div class="wrapper">

        <div
          class="card-box"
          v-if="collectList && collectList.length > 0"
        >
          <mu-card
            class="card"
            v-for="item in collectList"
            :key="item._id"
          >
            <mu-card-media :title="item.title">
              <img
                :src="item.cover"
                alt=""
              >
            </mu-card-media>
            <mu-card-text @click="goDetail(item)">{{item.introduction}}</mu-card-text>
            <mu-card-actions class="action">
              <mu-button
                flat
                color="pink500"
                @click="cancelCollect(item._id)"
              >
                <mu-icon
                  value="
                remove_circle"
                  left
                >
                </mu-icon>
                取消
              </mu-button>
              <mu-button
                flat
                color="primary"
                @click="like(item._id)"
              >
                <mu-icon
                  value="thumb_up"
                  left
                ></mu-icon>
                点赞
              </mu-button>
            </mu-card-actions>
          </mu-card>
        </div>

        <NotFound
          v-else
          title="暂无收藏内容"
          desc="你没有收藏文章哟！"
        ></NotFound>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateUserForm from '@/components/UpdateUserForm'
import NotFound from '@/views/NotFound'
export default {
  name: 'user',
  components: {
    UpdateUserForm,
    NotFound
  },
  data() {
    return {
      email: JSON.parse(localStorage.getItem('user')).email,
      openUpdateModal: false,
      collectList: [
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
      ],
      userInfo: {
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0703%2Fbe034d4aj00qvmr2n001kc000g400kic.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658174042&t=0f248fc7e8db81e8f2e55e4393ded9b2',
        nickName: 'izumi sakai',
        email: '123123123@zard.com',
        introduction: '经典语录励志名言(精选310句) 在学习、工作或生活中,大家总免不了要接触或使用名言吧,名言是对生活、对世界的综合浓缩,简短的一句话,蕴含着深刻的道理。'
      }
    }
  },
  mounted() {
    this.collectList = []
    if (!this.email) {
      return this.$router.push('/articles')
    }
    this.userInfo = {
      avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0703%2Fbe034d4aj00qvmr2n001kc000g400kic.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658174042&t=0f248fc7e8db81e8f2e55e4393ded9b2',
      nickName: 'izumi sakai',
      email: '123123123@zard.com',
      introduction: '经典语录励志名言(精选310句) 在学习、工作或生活中,大家总免不了要接触或使用名言吧,名言是对生活、对世界的综合浓缩,简短的一句话,蕴含着深刻的道理。'
    }
  },
  methods: {
    uploadFile(e) {
      console.log(e)
    },
    goDetail(item) {
      this.$router.push({
        name: 'articlesDetails',
        query: {
          id: item._id
        }
      })
    },
    cancelCollect(id) {
      console.log(id)
    },
    like(id) {
      console.log(id)
    },
    toggleUpdateModal(bool) {
      this.openUpdateModal = bool
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .slider-card {
    width: 5rem;
    position: relative;
    text-align: center;
    padding: 16px;
    border-radius: 0;
    .edit {
      position: absolute;
      right: 40px;
      top: 20px;
    }
    .avatar {
      cursor: pointer;
      margin-top: 20px;
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px -2px rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    }
    .file {
      width: 100px;
      height: 100px;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
      color: #00e676;
    }
    .email {
      font-size: 16px;
    }
    .desc {
      font-size: 14px;
      margin: 10px 0;
      text-align: left;
    }
  }
}
.right {
  flex: 1;
  .wrapper {
    padding-left: 5%;
    padding-top: 90px;
    .card-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .card {
      width: 100%;
      margin-right: 4%;
      margin-bottom: 20px;
      max-width: 6rem;
      .mu-card-media {
        img {
          height: 5rem;
        }
      }
    }
  }
}
.action {
  display: flex;
  justify-content: space-around;
}
</style>



