<template>
  <div class="block">
      <div class="title">
        微工作台
        <span class="line"></span>
      </div>
      <p class="tip">邀请客户关注微工作台之后，客户可以在微工作台中接收各种通知消息以及进行互动</p>
      <img src="" alt="图片加载失败" class="qr"/>
      <p class="qr-tip">微工作台二维码</p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.block {
  margin: 0.3rem 0 0.3rem 0;
  .title {
    margin-bottom: 0.2rem;
    font-size: 0.38rem;
    color: #222;
    position: relative;
    line-height: 1rem;
    height: 1rem;
    text-align: center;
    .line {
      width: 0.52rem;
      height: 0.03rem;
      background: $base_color;
      position: absolute;
      left: calc(50% - 0.26rem);
      bottom: 0.03rem;
    }
  }
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
.qr-tip{
  font-size: 0.28rem;
  color: #999;
  text-align: center;
}
</style>