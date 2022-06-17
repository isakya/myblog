<template>
  <div class="right-config">
    <mu-card class="slider-card">
      <mu-avatar
        class="avatar"
        :size="100"
      >
        <img v-lazy="avatar">
      </mu-avatar>
      <div class="title">
        IZUMI
      </div>
      <div class="desc">
        专注web和移动端开发
      </div>
      <div class="tags">
        <mu-chip class="chip">
          Vue
        </mu-chip>
        <mu-chip class="chip">
          React
        </mu-chip>
        <mu-chip class="chip">
          Node.js
        </mu-chip>
      </div>
      <div class="friend-link-box">
        <p class="friend-link-title">友情链接</p>
        <div class="friend-links">
          <mu-button
            fab
            small
          >
            <mu-avatar>
              <img
                src="http://www.nevergiveupt.top/github.png"
                alt=""
              >
            </mu-avatar>
          </mu-button>
          <mu-button
            fab
            small
          >
            <mu-avatar>
              <img
                src="http://www.nevergiveupt.top/sf.jpeg"
                alt=""
              >
            </mu-avatar>
          </mu-button>
          <mu-button
            fab
            small
          >
            <mu-avatar>
              <img
                src="http://www.nevergiveupt.top/zhihu.jpg"
                alt=""
              >
            </mu-avatar>
          </mu-button>
        </div>
      </div>
    </mu-card>

    <!-- 广告 -->
    <mu-card class="slider-card card-advert">
      <div class="ad">
        广告
      </div>
      <mu-carousel
        style="height:120px;"
        hide-controls
      >
        <mu-carousel-item>
          <img
            style="width:100%;cursor:pointer;"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F19%2F20200619094306_blmie.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658087796&t=b7c7720d548bfb61d93c7f91acd4748c"
            alt=""
          >
        </mu-carousel-item>
      </mu-carousel>
    </mu-card>

    <mu-card class="slider-card">
      <div class="friend-link-box">
        <p class="friend-link-title">电影推荐</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">
              唐人街探案3
            </mu-chip>
          </div>
        </div>
      </div>
      <div class="friend-link-box">
        <p class="friend-link-title">电视剧</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">
              唐人街探案3
            </mu-chip>
          </div>
        </div>
      </div>
      <div class="friend-link-box">
        <p class="friend-link-title">音乐</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">
              唐人街探案3
            </mu-chip>
          </div>
        </div>
      </div>
    </mu-card>

    <mu-card class="slider-card card-advert">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F73395755%2F140b89081b6648029f3e60bd1138c859.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvNzMzOTU3NTUvMTQwYjg5MDgxYjY2NDgwMjlmM2U2MGJkMTEzOGM4NTkuanBlZw%3D%3D%2Fsign%2F0c9974918e36ff3174695038156f531e.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658087796&t=bce699ce57707a419c850679e0e69d33"
        alt=""
      >
    </mu-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.right-config {
  width: 4rem;
}
.slider-card {
  position: relative;
  margin-top: 16px;
  text-align: center;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}
.avatar {
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}
.title {
  font-size: 14px;
  color: #00e676;
}
.desc {
  font-size: 14px;
  margin: 10px 0;
}
.tags {
  .chip {
    margin: 0 10px 10px 0;
  }
}
.friend-link-box {
  .friend-link-title {
    position: relative;
    &::before {
      content: '';
      width: 30%;
      height: 1px;
      background: #ccc;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      content: '';
      content: '';
      width: 30%;
      height: 1px;
      background: #ccc;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .friend-links {
    display: flex;
    justify-content: space-around;
  }
}

.card-advert {
  padding: 35px 10px 10px 10px;
}
.ad {
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 12px;
  z-index: 1;
}
</style>