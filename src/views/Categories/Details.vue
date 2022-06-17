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
    <div>
      文章详情
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'categories',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      categoriesDetailsBgImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F5baeda5137de32ec63b4ecf9823d4e228c284e62.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658057133&t=488485d8ea4c14aca2bd44c277450cd1'
    }
  }
}
</script>

<style lang="less" scoped>
</style>