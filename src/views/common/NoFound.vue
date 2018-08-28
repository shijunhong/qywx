<template>
  <div class="notfound">
      <img :src="require('images/404.png')" />
      <p>该页面不存在</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.notfound {
  padding-top: 50%;
  img {
    margin: 0 auto;
    // margin-bottom: 0.8rem;
    display: block;
    width: 4.49rem;
    height: 2.51rem;
  }
  p {
    text-align: center;
    color: #222;
    font-size: 0.3rem;
  }
}
</style>