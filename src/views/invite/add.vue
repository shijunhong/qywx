<template>
  <div>
      <div class="block">
          <div class="title">
            方式一
            <span class="line"></span>
          </div>
          <p class="tip">客户使用手机微信扫描下面的二维码</p>
          <img src="" alt="图片加载失败" class="qr"/>
      </div>
       <div class="block">
          <div class="title">
            方式二
            <span class="line"></span>
          </div>
          <p class="tip">发送一下链接给想要邀请的客户</p>
          <p class="url-box">https://blog.csdn.net/jession_lin/article/details/60581318</p>
          <span class="url-share">复制并发送给客户</span>
      </div>
  </div>
</template>

<script>
export default {
  components: {}
}
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
    font-size: 0.32rem;
    color: #222;
    text-align: center;
    margin-bottom: 0.3rem;
  }
  .qr {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    display: block;
  }
}
.url-box {
  padding: 0.4rem 0.5rem;
  background: #eee;
  font-size: 0.3rem;
  color: #222;
  width: 6.9rem;
  margin: 0 auto;
  margin-bottom: 0.3rem;
  word-break: break-all;
  line-height: 1.5;
  white-space: pre-wrap;
  border-radius: 0.08rem;
}
.url-share {
  width: 3.04rem;
  height: 0.84rem;
  line-height: 0.84rem;
  text-align: center;
  border-radius: 0.5rem;
  color: $base_color;
  border: 0.01rem solid $base_color;
  margin: 0 auto;
  display: block;
  font-size: 0.28rem;
}
</style>