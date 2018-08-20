<template>
  <div>
    <p class="tip">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'loadbottom',
  props: {
    content: {
      type: String,
      default: () => '没有更多了...'
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.tip {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
</style>
