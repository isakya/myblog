<template>
  <div>
    <mu-dialog
      scrollable
      title="修改资料"
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
          label="Email（用于登陆，不可修改）"
          prop="email"
        >
          <mu-text-field
            disabled
            v-model.trim="validateForm.email"
            prop="email"
          >

          </mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="昵称"
          prop="nickName"
          :rules="nickNameRules"
        >
          <mu-text-field
            v-model.trim="validateForm.nickName"
            prop="nickName"
          >

          </mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="登陆密码"
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
          label="确认密码（必填）"
          prop="confirmPassword"
          :rules="confirmPasswordRules"
        >
          <mu-text-field
            v-model.trim="validateForm.confirmPassword"
            prop="confirmPassword"
          >

          </mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="简介"
          prop="introduction"
          :rules="introductionRules"
        >
          <mu-text-field
            multi-line
            :rows="4"
            full-width
            v-model.trim="validateForm.introduction"
            prop="introduction"
          >
          </mu-text-field>
        </mu-form-item>
      </mu-form>
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
        确认
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
    },
    userInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      Icon,
      visibility: false,
      validateForm: {
        nickName: '',
        password: '',
        confirmPassword: '',
        introduction: '',
      },
      nickNameRules: [
        {
          validate: (val) => !val.length <= 20, message: '昵称最大20个字符'
        }
      ],
      passwordRules: [
        {
          validate: (val) => !!val, message: '密码必填'
        },
        {
          validate: (val) => {
            let reg = /^[a-zA-Z]\w{5,19}$/
            return reg.test(val)
          },
          message: '密码格式错误'
        }
      ],
      confirmPasswordRules: [
        {
          validate: (val) => !!val, message: '确认密码必填'
        },
        {
          validate: (val) => {
            return this.validateForm.password === val
          },
          message: '密码不一致，请重新输入'
        }
      ],
      introductionRules: [
        {
          validate: (val) => !val.length <= 1000, message: '简介最大1000个字符'
        }
      ],
    }
  },
  watch: {
    userInfo(val) {
      this.validateForm = {
        ...val,
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    clear() {
      // 重置验证规则
      this.$refs.form.clear()
      this.validateForm = {
        email: '',
        nickName: '',
        password: '',
        confirmPassword: '',
        introduction: '',
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