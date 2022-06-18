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
          <div
            v-for="item in toc"
            :key="item.name"
          >
            <a @click="scroolToPosition(item.href)">{{item.name}}</a>
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
            @click="scroolToPosition('#comment')"
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

            <mavonEditor
              v-model="content"
              defaultOpen="preview"
              :toolbarsFlag="false"
              :subfield="false"
              :isshljs="true"
              :navigation="isPC"
              codeStyle="tomorrow-night-eighties"
            ></mavonEditor>

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
          <!-- 评论 -->
          <mu-card
            class="card"
            id="comment"
          >
            <Commonent
              @comment="comment"
              :commentSuccess="commentSuccess"
            ></Commonent>
          </mu-card>
          <!-- 评论列表 -->
          <mu-card
            class="card"
            v-if="commentList.length > 0"
          >
            <mu-card-title title="评论(3)"></mu-card-title>
            <mu-divider></mu-divider>
            <CommentList
              :list="commentList"
              :articleId="info._id"
              :articleTitle="info.title"
            ></CommentList>
          </mu-card>
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
import $ from 'jquery'
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
import { markdown } from '@/utils/markdown'
import Clipboard from "clipboard"
import Commonent from '@/components/Commonent'
import CommentList from '@/components/CommentList'

export default {
  name: 'articlesDetails',
  components: {
    Header,
    Footer,
    RightConfig,
    mavonEditor,
    Commonent,
    CommentList
  },
  data() {
    return {
      info: {
        _id: '1',
        title: 'n=d&word=坂井泉水%20写真&step_word=&hs=0&pn=40&spn=0&di=710813',
        introduction: 'werwaslkdfjasanfowijeoiqjwerjjalskfalskdjfksldjflkajsdklfjaskljiweqrip按实际发神经为二抗击倭寇技术附件as服科技阿斯利康附件为若即若离卡加斯发生了看得见反馈拉水电费是',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fm%2Fpublic%2Fp2666075760.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658091590&t=79f01f99927f99f8638d12c69f43dc2f'
      },
      toc: [],
      content: "",
      commentSuccess: false,
      commentList: [
        {
          targetReplayId: "6084ce48e268db458626591a",
          targetReplayContent: "good",
          currentReplayContent: "这篇文章写得不错",
          commentTime: 1623048202,
          auditTime: 0,
          auditStatus: "3",
          _id: "60bdc00ac4b76ef12cd151aa",
          avatar: "http://www.nevergiveupt.top/user_avatar.png",
          email: "13412345678@163.com",
          nickName: "Never",
          articleId: "601134b4c4ae0128013d322d",
          articleTitle: "测试评论文章",
        },
        {
          targetReplayId: "",
          targetReplayContent: "",
          currentReplayContent: "good",
          commentTime: 1619316296,
          auditTime: 1619316309,
          auditStatus: "1",
          _id: "6084ce48e268db458626591a",
          avatar:
            "http://img.nevergiveupt.top/78e79747e0658b0d1766c8928d784653.png",
          email: "1916579055@qq.com",
          nickName: "永不放弃",
          articleId: "601134b4c4ae0128013d322d",
          articleTitle: "测试评论文章",
        },
        {
          targetReplayId: "",
          targetReplayContent: "",
          currentReplayContent: "好，不错",
          commentTime: 1611745373,
          auditTime: 1612108800,
          auditStatus: "1",
          _id: "6011485dc4ae0128013d3246",
          avatar:
            "http://img.nevergiveupt.top/78e79747e0658b0d1766c8928d784653.png",
          email: "1916579055@qq.com",
          nickName: "永不放弃",
          articleId: "601134b4c4ae0128013d322d",
          articleTitle: "测试评论文章",
        },
      ],
    }
  },
  mounted() {

    this.content = markdown(mavonEditor, "在前端开发中， html 转 pdf 是最常见的需求，实现这块需求的开发[html2canvas](http://html2canvas.hertzen.com/)和 [jspdf](http://mozilla.github.io/pdf.js/getting_started/) 是最常用的两个插件，插件都是现成的。\n### 1.安装\n### 2.使用 \n ```js \n console.log(123); \n```")
    this.$nextTick(() => {
      const aArr = $('.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content a').toArray()
      let toc = []
      aArr.forEach(item => {
        let href = $(item).attr('id')
        let name = $(item).parent().text()
        if (href) {
          toc.push({
            href: '#' + href,
            name,
          })
        }
      })
      this.toc = toc
    })
    this.$nextTick(() => {
      let clipboard = new Clipboard(".copy-btn")
      // 复制成功失败的提示
      clipboard.on("success", () => {
        this.$toast.success("复制成功")
      })
      clipboard.on("error", () => {
        this.$toast.error("复制失败")
      })
    })

    this.commentList = this.listToTree(this.commentList)
  },
  methods: {
    scroolToPosition(id) {
      let position = $(id).offset()
      position.top = position.top - 80
      $('html,body').animate({ scrollTop: position.top }, 1000)
    },
    comment(data) {
      console.log('评论', data)
      this.commentSuccess = true
    },
    listToTree(list) {
      let info = list.reduce(
        (map, node) => ((map[node._id] = node), (node.children = []), map),
        {}
      )
      return list.filter((node) => {
        info[node.targetReplayId] &&
          info[node.targetReplayId].children.push(node)
        return !node.targetReplayId
      })
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