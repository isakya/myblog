<template>
  <div class="details">
    <Header :light-index="1"></Header>
    <div
      v-if="isPC"
      class="toc-fixed"
    >
      <mu-card class="card">
        <div class="toc">
          <div class="title">
            文章目录
          </div>
          <div>
            <a href="">标题1</a>
            <a href="">标题2</a>
          </div>
        </div>
      </mu-card>

      <div
        class="action"
        :class="toc.length > 0?  '': 'noMulu' "
      >
        <mu-tooltip
          placement="top"
          content="点赞"
        >
          <mu-button
            fab
            color="primary"
          >
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip
          placement="top"
          content="收藏"
        >
          <mu-button
            fab
            color="purple500"
          >
            <mu-icon value="grade"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip
          placement="top"
          content="评论"
        >
          <mu-button
            fab
            color="red"
          >
            <mu-icon value="chat"></mu-icon>
          </mu-button>
        </mu-tooltip>
      </div>
    </div>
    <div class="content">
      <div
        v-if="isPC"
        class="right"
      >
        <RightConfig></RightConfig>
      </div>
      <div
        class="left"
        :style="{marginTop:isPC?'16px': 0}"
      >
        <div
          class="left-box"
          :style="{width: isPC ? '70%' : '100%' }"
        >
          <mu-card class="card">
            <mu-card-title
              :title="info.title"
              :sub-title="info.introduction"
            >
            </mu-card-title>
            <mu-card-media>
              <img
                v-lazy="info.cover"
                style="height: 100%"
              >
            </mu-card-media>
            <mu-card-actions class="sub-title">
              <mu-button
                class="cursor-default"
                flat
                color="warning"
              >
                字数（1000）
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
                color="secondary"
              >
                阅读大约2分钟
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
                color="info"
              >
                查看（1000）
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
                color="error"
              >
                评论（1000）
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
                color="primary"
              >
                点赞（1000）
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
                color="#9e9e9e"
              >
                2022-05-20 13:14
              </mu-button>
            </mu-card-actions>
            <div>md内容</div>
            <mu-card-actions>
              <mu-button
                class="cursor-default"
                flat
                color="primary"
              >
                <mu-icon
                  left
                  value="dns"
                ></mu-icon>分类
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
              >
                <mu-icon
                  left
                  value="loyalty"
                ></mu-icon>Vue
              </mu-button>
              <mu-button
                class="cursor-default"
                flat
              >
                <mu-icon
                  left
                  value="loyalty"
                ></mu-icon>React
              </mu-button>
            </mu-card-actions>
          </mu-card>
          <div class="action-list">
            <mu-tooltip
              placement="top"
              content="点赞"
            >
              <mu-button
                fab
                color="primary"
              >
                <mu-icon value="thumb_up"></mu-icon>
              </mu-button>
            </mu-tooltip>
            <mu-tooltip
              placement="top"
              content="收藏"
            >
              <mu-button
                fab
                color="purple500"
              >
                <mu-icon value="grade"></mu-icon>
              </mu-button>
            </mu-tooltip>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import RightConfig from '@/components/RightConfig.vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'articlesDetails',
  components: {
    Header,
    Footer,
    RightConfig
  },
  data() {
    return {
      info: {
        title: 'n=d&word=坂井泉水%20写真&step_word=&hs=0&pn=40&spn=0&di=710813',
        introduction: 'werwaslkdfjasanfowijeoiqjwerjjalskfalskdjfksldjflkajsdklfjaskljiweqrip按实际发神经为二抗击倭寇技术附件as服科技阿斯利康附件为若即若离卡加斯发生了看得见反馈拉水电费是',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fm%2Fpublic%2Fp2666075760.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658091590&t=79f01f99927f99f8638d12c69f43dc2f'
      },
      toc: []
    }
  }
}
</script>

<style lang="less" scoped>
.details {
  padding-top: 64px;
}
.content {
  padding-bottom: 0.53333rem;
  display: flex;
  .left {
    flex: 9;
    margin-top: 16px;
    .card {
      border-radius: 5px;
      margin-bottom: 0.48rem;
      .sub-title {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  .right {
    flex: 3;
    display: flex;
    flex-direction: column;
  }
}
.toc-fixed {
  position: fixed;
  width: 20%;
  right: 20px;
  top: 80px;
  .toc {
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
    word-break: break-all;
    padding: 0.2rem 0 0.2rem 0.2rem;
    .title {
      font-size: 0.4rem;
      margin-bottom: 10px;
    }
    a {
      display: inline-block;
      color: #2196f3;
      font-size: 0.32rem;
      cursor: pointer;
      padding: 5px 0;
      &:hover {
        color: #00e676;
      }
    }
  }
  .action {
    margin-top: 0.42667rem;
    display: flex;
    justify-content: space-around;
  }
}
.action-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.42667rem;
}
.noMulu {
  flex-direction: column;
  align-items: center;
  height: 400px;
}
</style>