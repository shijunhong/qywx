<template>
  <div class="login">
    <div class="loading-box">
       <img class="loading" :src="require('images/loading.png')" alt="">
    </div>
    <p class="tip">加载中</p>
  </div>
</template>

<script>
import { redirectHost } from '@/config'

export default {
  mounted() {
    if (!this.$route.query.code) {
      const url = encodeURI(`${redirectHost}/login`)
      const href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd0f347fe6b3b2a40&redirect_uri=${url}&response_type=code&scope=SCOPE&agentid=AGENTID&state=STATE#wechat_redirect`
      window.location.href = href
      return
    }
    // 有code后登录
    this.$store.dispatch('login', this.$route.query.code)
  }
}
</script>

<style lang="scss" scoped>
$h: 1.22rem;
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .tip {
    color: #8b94a5;
    font-size: 0.3rem;
  }
}
.loading-box {
  width: $h + 1.2rem;
  height: $h + 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
}
.loading {
  width: $h;
  display: block;
  border-radius: 50%;
  box-sizing: content-box;
  animation: animate 3s linear infinite;
}
@keyframes animate {
  0% {
    background: #c3d4eb;
    padding: 0;
  }
  50% {
    background: #eef2f9;
    padding: 0.3rem;
  }
  100% {
    background: #eef2f9;
    padding: 0.6rem;
  }
}
</style>
