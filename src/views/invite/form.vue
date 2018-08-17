<template>
  <div>
    <div class="form">
        <div class="item">
          <span class="title">客户名称：</span>
          <wx-input v-model="d" width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="name_rule" ref="name" />
        </div>
        <div class="item">
          <span class="title">联系人：</span>
          <wx-input v-model="d" width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="name_rule" ref="linkman" />
        </div>
        <div class="item">
          <span class="title">手机号：</span>
          <wx-input v-model="d" width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="name_rule" ref="tel" />
        </div>
        <div class="item">
          <span class="title">验证码：</span>
          <wx-input v-model="d" width="50%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="name_rule" ref="yzm" />
          <span class="yzm">获取验证码</span>
          <!-- <span class="yzm date">剩余 20 秒</span> -->
        </div>
    </div>
    <div class="btn-box">
       <mt-button  class="submit" type="primary" @click="submit" >提交</mt-button>
       <p v-show="errorShow" class="error">提示：{{errorTip}}</p>
    </div>
  </div>
</template>

<script>
import WxInput from 'components/WxInput'
import { Button } from 'mint-ui'

export default {
  components: {
    WxInput,
    'mt-button': Button
  },
  data() {
    return {
      d: '1',
      errorShow: false,
      errorTip: ''
    }
  },
  methods: {
    blur(errorTip) {
      if (errorTip) {
        this.errorShow = true
        this.errorTip = errorTip
      }
    },
    name_rule() {
      return {
        result: 'faild',
        tip: '客户名称不超过50个字'
      }
    },
    // 提交
    submit() {
      this.validate().then((valid) => {
        // if (!valid) return
      })
    },
    // 所有表单的验证
    validate() {
      const field = ['name', 'linkman', 'tel', 'yzm']
      let tag = true
      return new Promise((resolve, reject) => {
        // 取第一个错误提示
        let firstTip = ''
        for (let item of field) {
          let errorTip = this.$refs[item].validate()
          if (errorTip) {
            tag = false
            if (!firstTip) firstTip = errorTip
          }
        }
        this.errorShow = !tag
        this.errorTip = firstTip
        resolve(tag)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$h: 0.7rem;
.form {
  padding-top: 0.3rem;
  .title {
    font-size: 0.3rem;
    color: #222;
    height: $h;
    line-height: $h;
    width: 23%;
    display: inline-block;
  }
  .item {
    margin-left: 0.3rem;
    padding: 0.15rem 0.2rem 0.15rem 0;
    border-top: 0.01rem solid #eee;
    &:last-child {
      border-bottom: 0.01rem solid #eee;
    }
  }
  .yzm {
    font-size: 0.3rem;
    height: $h;
    line-height: $h;
    display: inline-block;
    text-align: center;
    width: 27%;
    color: #1aad19;
  }
  .date {
    font-size: 0.3rem;
    color: #999;
  }
}
.btn-box {
  margin-top: 0.3rem;
  width: 100%;
  padding: 0 0.3rem;
  overflow: hidden;
  .submit {
    background: $base_green !important;
    width: 100%;
  }
  .not-submit {
    opacity: 0.7;
  }
  .error {
    margin-top: 0.3rem;
    font-size: 0.28rem;
    color: $base_error;
  }
}
</style>