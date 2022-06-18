<template>
  <div class="clearfix">
    <mu-card-text>
    </mu-card-text>
    <mu-text-field
      v-model="content"
      placeholder="说点什么..."
      class="comment-input"
      multi-line
      :rows="4"
      full-width
    ></mu-text-field>
    <mu-button
      @click="submit"
      class="comment-btn"
      color="primary"
    >评论</mu-button>

    <mu-dialog
      title="提示"
      :esc-press-close="false"
      :overlay-close="false"
      width="600"
      :open.sync="openAlert"
    >
      评论内容需要审核，大概需要24小时，您确定需要继续操作吗？
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="ok(false)"
      >取消</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="ok(true)"
      >确定</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  props: {
    commentSuccess: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: '',
      openAlert: false
    }
  },
  watch: {
    // 评论成功后将弹框关闭
    commentSuccess(val) {
      if (val) {
        this.openAlert = false
        this.content = ''
      }
    }
  },
  methods: {
    submit() {
      if (this.content) {
        this.openAlert = true
      } else {
        this.$toast.info('请输入评论内容！')
      }
    },
    ok(bool) {
      if (bool) {
        this.$emit('comment', {
          content: this.content,
        })
      } else {
        this.openAlert = false
        this.content = ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.comment-input {
  padding: 0 0.42667rem;
}
.comment-btn {
  float: right;
  margin: 0 0.42667rem 0.42667rem 0;
}
</style>