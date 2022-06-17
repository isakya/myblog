<template>
  <div
    class="common"
    :style="{background: `url(${categoriesDetailsBgImg}) 0px center no-repeat`, backgroundSize: 'cover'}"
  >
    <Header
      :light-index="3"
      background="transparent"
    ></Header>
    <div v-if="isPC">
      <Footer fixed></Footer>
    </div>
    <div class="content">
      <mu-paper
        class="pc-box"
        :z-depth="5"
        v-if="isPC"
      >
        <mu-list>
          <div class="sub-title">分类-技术(100)</div>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
              <span>2022-4-30 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <div class="pagination">
          <mu-pagination
            raised
            circle
            :total="100"
            :current.sync="page"
            :pageSize.sync="pageSize"
          ></mu-pagination>
        </div>
      </mu-paper>
      <div
        v-else
        class="wap-box"
      >
        <div class="sub-title">分类-技术(100)</div>
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-4-30 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-4-30 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-4-30 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022-4-30 20:30</span>
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <Footer></Footer>
      </div>
    </div>
    <mu-button
      v-show="!isPC"
      small
      fab
      color="#fff"
      class="back-fab"
      @click="$router.go(-1)"
    >
      <mu-icon
        color="#ccc"
        value="arrow_back"
      ></mu-icon>
    </mu-button>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'categoriesDetails',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      categoriesDetailsBgImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F5baeda5137de32ec63b4ecf9823d4e228c284e62.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658057133&t=488485d8ea4c14aca2bd44c277450cd1',
      page: 5,
      pageSize: this.isPC ? 10 : 15
    }
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
</style>