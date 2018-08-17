<template>
  <div>
      <tap tap1="添加到我的客户" tap2="关注微工作台">
        <add slot="tap1"/>
        <attention slot="tap2"/>
    </tap>
    <bottom />
  </div>
</template>

<script>
import Tap from 'components/Tap'
import add from './add'
import attention from './attention'
import Bottom from 'components/Bottom'

export default {
  components: {
    Tap,
    add,
    attention,
    Bottom
  }
}
</script>

<style lang="scss" scoped>
</style>