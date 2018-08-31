<template>
  <div class="block" style="margin-top: 1.1rem;">
      <p class="tip">长按并且识别二维码关注微工作台，不错过任何有效商机！</p>
      <img :src="url" alt="图片加载失败" class="qr"/>
      <p class="qr-tip">微工作台二维码</p>
    </div>
</template>

<script>
export default {
  mounted() {
    this.url = this.$route.query.url
  },
  data() {
    return {
      url: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  margin: 0.3rem 0 0.3rem 0;
  .tip {
    margin: 0 auto;
    font-size: 0.32rem;
    color: #222;
    margin-bottom: 1rem;
    width: 5rem;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .qr {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    display: block;
    margin-bottom: 0.4rem;
  }
}
.qr-tip {
  font-size: 0.28rem;
  color: #999;
  text-align: center;
}
</style>