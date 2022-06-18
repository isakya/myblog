<template>
  <div class="container">
    <div class="panel">
      <div class="text-center">
        <h2 class="padding-top">
          <span>{{title}}</span>
        </h2>
        <div>
          <div class="float-left">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F299ed3f0cde6708deafb6921f94cdbffc643bae76949-d7vBwP_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658174042&t=fb721c43c5817bda25ea2d1b2a4dc5f2"
              alt=""
            >
            <div class="alert">{{desc}}</div>
          </div>
          <div class="float-right">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Flarge%2Fpublic%2Fp53422695.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658174042&t=0d83e1a37024ccf1b598846808137378"
              alt=""
            >
          </div>
        </div>
        <div class="padding-big">
          <a
            href="/articles"
            class="button"
          >去看文章</a>
          <a
            href="/"
            class="button"
          >返回首页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    title: {
      type: String,
      default: '404错误! 抱歉您要找的页面不存在'
    },
    desc: {
      type: String,
      default: '天啊！页面不见了！'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-top: 8%;
  padding: 0 50px;
  .panel {
    margin-top: 20px;
    .text-center {
      text-align: center;
      .padding-top {
        padding-top: 10px;
      }
    }
  }
  .float-left {
    float: left;
    .alert {
      border-radius: 5px;
      padding: 15px;
      border: solid 1px #ddd;
    }
  }
  .float-right {
    float: right;
  }
}
.padding-big {
  padding: 20px;
  display: flex;
  justify-content: center;
  .button {
    padding: 5px 10px;
    margin-left: 5px;
    border: 1px solid #ccc;
  }
}
</style>