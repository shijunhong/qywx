<template>
  <div class="login">login</div>
</template>

<script>
import { redirectHost } from '@/config'

export default {
  mounted() {
    if (!this.$route.query.code) {
      const url = `${redirectHost}/#/login`
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwf8a477207b560622&redirect_uri=${url}&response_type=code&scope=SCOPE&agentid=AGENTID&state=STATE#wechat_redirect`
      return
    }
    // 有code后登录
    this.$store.dispatch('login', this.$route.query.code)
  }
}
</script>
