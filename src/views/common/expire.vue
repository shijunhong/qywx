<template>
  <div class="no-auth">
    <img :src="require('images/timeout.png')" />
    <p>应用已过期，请联系应用供应商续费购买</p>
    <p>联系电话：400-6311-887</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.no-auth {
  padding-top: 30%;
  img {
    margin: 0 auto;
    margin-bottom: 0.8rem;
    display: block;
    width: 2.72rem;
    height: 2.84rem;
  }
  p {
    text-align: center;
    color: #222;
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
  }
}
</style>