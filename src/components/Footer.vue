<template>
  <div
    class="footer"
    :class="{'fixed-footer': fixed}"
  >
    <div class="copyright">
      <a href="http://beian.miit.gov.cn">Copyright 1231123123123123</a>
      <div>本系统由Vue+Muse-UI提供技术支持 </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  font-size: 0.3rem;
  margin: 30px 0;
  .copyright {
    a {
      // 继承父元素字体颜色
      color: inherit;
    }
  }
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>