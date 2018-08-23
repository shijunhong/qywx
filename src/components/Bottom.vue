<template>
  <div class="bottom">
      <div v-for="item in taps" :key="item.name" class="bottom-item" @click="handleClick(item.url)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taps: [
        {
          name: '邀请客户',
          url: '/invite'
        },
        {
          name: '获客统计',
          url: '/customer'
        }
      ]
    }
  },
  methods: {
    handleClick(url) {
      this.$router.push(url)
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
$h: 1.08rem;
.bottom {
  height: $h;
  background: #fff;
  color: #222;
  font-size: 0.3rem;
  border-top: 0.01rem solid #dedede;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  z-index: 998;
  .bottom-item {
    height: $h;
    line-height: $h;
    flex: 1;
    text-align: center;
    border-left: 0.01rem solid #dedede;
    &:first-child {
      border-left: 0;
    }
  }
}
</style>
