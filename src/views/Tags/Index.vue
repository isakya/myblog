<template>
  <div>
    <div
      class="common"
      :style="{background: `url(${tagsBgImg}) center center no-repeat`, backgroundSize: 'cover'}"
    >
      <Header
        :light-index="4"
        background="transparent"
      ></Header>
      <Footer fixed></Footer>
      <div class="content">
        <div class="tags-wap tagcloud">
          <a
            v-for="item in tags"
            :key="item.name"
            class="tag"
          >
            <mu-chip
              v-if="item.articleNum > 0"
              :color="item.color"
            >{{item.name}}{{item.articleNum}}</mu-chip>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { randomColor } from '@/utils/index.js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'tags',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      tagsBgImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fbe5ee9adcdb461b8a425ab5a2f40cc768e054a9c.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658057133&t=b0d416fd792eaa91ae9216c667f5a10f',
      tags: [
        {
          name: 'Vue',
          articleNum: 10,
          color: randomColor()
        },
        {
          name: 'React',
          articleNum: 10,
          color: randomColor()
        },
        {
          name: 'Node.js',
          articleNum: 10,
          color: randomColor()
        }
      ]
    }
  },
  mounted() {
    window.tagcloud({
      selector: '.tagcloud',
      fontSize: 16,
      radius: 100,
      mspeed: "normal",
      ispeed: "normal",
      direction: 135,
      keep: false
    })
  }
}
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding-top: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.tags-wap {
  padding: 0 0.533333333rem;
  width: 70%;
  .tag {
    margin-right: 0.5333333rem;
    margin-bottom: 0.5333333rem;
    cursor: pointer;
  }
}
</style>