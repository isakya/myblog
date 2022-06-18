<template>
  <div>
    <mu-dialog
      scrollable
      title="登陆"
      width="500"
      max-width="90%"
      :esc-press-colse="false"
      :overlay-close="false"
      :open.sync="open"
    >
      <mu-form
        ref="form"
        :model="validateForm"
      >
        <mu-form-item
          label="Email"
          prop="email"
          :rules="emailRules"
        >
          <mu-text-field
            v-model.trim="validateForm.email"
            prop="email"
          >

          </mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="密码"
          prop="password"
          :rules="passwordRules"
        >
          <mu-text-field
            v-model.trim="validateForm.password"
            :action-icon="visibility ? 'visibility_off' : 'visibility'"
            :action-click="() => (visibility = !visibility)"
            :type="visibility ? 'text' : 'password'"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="验证码"
          prop="captcha"
          :rules="captchaRules"
        >
          <mu-text-field
            v-model.trim="validateForm.captcha"
            prop="captcha"
          >
            <div class="captcha">1234</div>
          </mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button
        slot="actions"
        flat
      >
        <mu-avatar
          :size="30"
          style="margin-right: 10px"
        >
          <img
            :src="Icon.github"
            alt=""
          >
        </mu-avatar>
        github
      </mu-button>
      <mu-button
        slot="actions"
        flat
        small
        @click="clear"
      >
        取消
      </mu-button>
      <mu-button
        slot="actions"
        flat
        small
        @click="submit"
      >
        登陆
      </mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import { Icon } from '@/utils'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      Icon,
      visibility: false,
      validateForm: {
        email: '',
        password: '',
        captcha: ''
      },
      emailRules: [
        {
          validate: (val) => !!val, message: '邮箱必填'
        }
      ],
      passwordRules: [
        {
          validate: (val) => !!val, message: '密码必填'
        },
      ],
      captchaRules: [
        {
          validate: (val) => !!val, message: '请输入验证码'
        },
      ],
    }
  },
  methods: {
    clear() {
      // 重置验证规则
      this.$refs.form.clear()
      this.validateForm = {
        email: '',
        password: '',
        captcha: ''
      }
      this.$emit('toggle', false)
    },
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log('form valid: ', res)
      })
    }
  }
}
</script>

<style>
</style>