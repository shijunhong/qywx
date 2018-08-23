<template>
  <div class="login">login</div>
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
