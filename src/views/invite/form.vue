<template>
  <div>
    <div class="form">
        <div class="item">
          <span class="title">客户名称：</span>
          <wx-input emptyTip="请输入客户名称" v-model="client_name " width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="name_rule" ref="name" />
        </div>
        <div class="item">
          <span class="title">联系人：</span>
          <wx-input emptyTip="请输入联系人" v-model="contact_name" width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="contact_rule" ref="linkman" />
        </div>
        <div class="item">
          <span class="title">手机号：</span>
          <wx-input emptyTip="请输入手机号" v-model="mobile" width="77%" :isRequest="true" :onblur="blur" :rule="['blur']" :ruleFn="mobile_rule" ref="tel" />
        </div>
        <div class="item">
          <span class="title">验证码：</span>
          <wx-input emptyTip="请输入验证码" v-model="verify_code" width="50%" :isRequest="true" :onblur="blur" :rule="['blur']"  ref="yzm" />
          <span v-if="!count" class="yzm" @click="sendYzm">获取验证码</span>
          <span v-if="count" class="yzm date">剩余 {{num}} 秒</span>
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
import { Button, Toast } from 'mint-ui'
import { getVerifyCode, invite } from 'api/invite'

export default {
  components: {
    WxInput,
    'mt-button': Button
  },
  mounted() {
    this.staff_id = this.$route.query.staff_id
  },
  data() {
    return {
      client_name: '',
      contact_name: '',
      mobile: '',
      verify_code: '',
      staff_id: '',
      errorShow: false,
      errorTip: '',
      timeID: null,
      num: 60,
      countTime: null,
      count: false // 验证码开始计数
    }
  },
  methods: {
    blur(errorTip) {
      if (errorTip) {
        this.errorShow = true
        this.errorTip = errorTip
      } else {
        this.errorShow = false
        this.errorTip = ''
      }
    },
    sendYzm() {
      if (this.mobile.length === 0) {
        Toast('请输入手机号')
        return
      }
      if (this.mobile.length !== 11) {
        return
      }
      getVerifyCode(this.mobile, this.staff_id, 0).then((res) => {
        clearInterval(this.countTime)
        if (res.status === 'T') {
          this.checkYzmStatus()
        }
      })
    },
    checkYzmStatus() {
      getVerifyCode(this.mobile, this.staff_id, 1).then((res) => {
        if (res.status === 'T') {
          Toast('验证码发送成功')
          clearInterval(this.timeID)
          this.timeID = null
          this.count = true
          this.countTime = setInterval(() => {
            if (this.num === 0) {
              clearInterval(this.countTime)
              this.countTime = null
              this.num = 60
              this.count = false
              return
            }
            this.num--
          }, 1000)
        } else {
          this.checkYzmStatus()
        }
      })
    },
    name_rule(res) {
      if (res.length > 50) {
        return {
          result: 'faild',
          tip: '客户名称超限：客户名称最多填写50个字哦'
        }
        // eslint-disable-next-line
      } else {
        return {
          result: 'success'
        }
      }
    },
    contact_rule(res) {
      if (res.length > 50) {
        return {
          result: 'faild',
          tip: '联系人超限：联系人最多填写50个字哦'
        }
        // eslint-disable-next-line
      } else {
        return {
          result: 'success'
        }
      }
    },
    mobile_rule(res) {
      if (res.length !== 11) {
        return {
          result: 'faild',
          tip: '手机号码没有通过验证：请输入正确的手机号码'
        }
        // eslint-disable-next-line
      } else {
        // eslint-disable-next-line
        return {
          result: 'success'
        }
      }
    },
    // 提交
    submit() {
      this.validate().then((valid) => {
        if (!valid) return
        invite({
          commonStaffId: this.staff_id,
          client_name: this.client_name,
          contact_name: this.contact_name,
          mobile: this.mobile,
          verify_code: this.verify_code
        }).then((res) => {
          if (res.status === 'T') {
            this.$router.push(
              `/inviteok?client_name=${this.client_name}&contact_name=${this.contact_name}&mobile=${this.mobile}`
            )
          } else {
            if (res.error) {
              const msg = res.error[0] || res.error.code || res.error.mobile[0] || '提交错误'
              Toast({
                message: msg,
                duration: 2000
              })
            }
          }
        })
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