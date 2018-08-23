<template>
  <div class="no-auth">
    <img :src="require('images/noprivil.png')" />
    <p>404，页面未找到</p>
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
    width: 2.8rem;
    height: 2.03rem;
  }
  p {
    text-align: center;
    color: #222;
    font-size: 0.3rem;
  }
}
</style>