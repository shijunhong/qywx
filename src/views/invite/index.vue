<template>
  <tap tap1="添加到我的客户" tap2="关注微工作台">
      <add slot="tap1"/>
      <attention slot="tap2"/>
  </tap>
</template>

<script>
import Tap from 'components/Tap'
import add from './add'
import attention from './attention'

export default {
  components: {
    Tap,
    add,
    attention
  }
}
</script>

<style lang="scss" scoped>
</style>