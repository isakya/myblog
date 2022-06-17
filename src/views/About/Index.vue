<template>
  <div class="common">
    <Header
      :light-index="5"
      background="transparent"
    ></Header>
    <Footer fixed></Footer>
    <mu-carousel
      hide-indicators
      hide-controls
      class="carousel"
    >
      <mu-carousel-item
        v-for="item in info.imgs"
        :key="item._id"
      >
        <img :src="item.imgUrl">
      </mu-carousel-item>
    </mu-carousel>
    <div
      class="content"
      :style="{paddingTop: isPC?'64px': '56px'}"
    >
      <mu-card
        class="card"
        :style="{marginTop:isPC?'100px': 0}"
      >
        <mu-card-header v-if="isPC">
          <mu-paper
            class="avatar-box"
            circle
            :z-depth="5"
          >
            <img
              class="avatar"
              v-lazy="avatar"
            >
          </mu-paper>
        </mu-card-header>
        <mu-card-text>
          {{info.dsc}}
        </mu-card-text>
        <div class="tags">
          <mu-chip
            class="tag"
            v-for="(item,index) in info.tags"
            :key="item.name"
            :color="item.color"
            delete
            @delete="remove(index)"
          >
            {{item.name}}
          </mu-chip>
          <mu-button
            @click="reset"
            color="primary"
            v-if="info.tags && info.tags.length === 0"
          >reset</mu-button>
        </div>

      </mu-card>
    </div>
  </div>
</template>

<script>
import { randomColor } from '@/utils/index.js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'bout',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      info: {
        dsc: '尊严这个东西，其实是和欲望成反比的，你想得到一个东西，就会变得低三下四，死皮赖脸，而当你对眼前这个人，这件事无动于衷的时候，尊严就会在你心中拔地而起。',
        imgs: [
          {
            _id: 1,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F1fzczohpyRhdTHRsAticOBlHkRlKXtFUoVWzicp51jia7JCrzE7pu8FBnlB7rWplLhkpyRiaNLQ0NlZNicweqxUHkDg%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658078136&t=8dfebc9ea8dad09f3f35c29737f0f3ef'
          },
          {
            _id: 2,
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F20%2F20160620195500_z5JLA.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658078136&t=ee151075c347d735499679040be61b95'
          },
          {
            _id: 3,
            imgUrl: 'https://pic.rmb.bdstatic.com/74a829eae50ef7ce97672c60e0c7dda4.jpeg'
          }
        ],
        tags: [
          {
            name: 'Vue',
            color: randomColor()
          },
          {
            name: 'React',
            color: randomColor()
          },
          {
            name: 'Node.js',
            color: randomColor()
          }
        ]
      }
    }
  },
  methods: {
    remove(index) {
      this.info.tags.splice(index, 1)
    },
    reset() {
      this.info.tags = [
        {
          name: 'Vue',
          color: randomColor()
        },
        {
          name: 'React',
          color: randomColor()
        },
        {
          name: 'Node.js',
          color: randomColor()
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.carousel {
  position: fixed;
  height: 100%;
  margin-top: 0;
}
.card {
  max-width: 10rem;
  width: 10rem;
  margin: 0 auto;
  /deep/ .mu-card-header {
    display: flex;
    justify-content: flex-end;
    height: 1.333333rem;
  }
}
.avatar-box {
  width: 2.66668rem;
  height: 2.666667rem;
  position: absolute;
  top: -1.33333rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.tags {
  padding: 0 0.42667rem;
  .tag {
    margin-bottom: 0.42667rem;
    margin-right: 0.42667rem;
  }
}
</style>