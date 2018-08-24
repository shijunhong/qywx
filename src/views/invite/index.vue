<template>
  <div>
      <tap tap1="添加到我的客户" tap2="关注微工作台">
        <add slot="tap1" :info="info"/>
        <attention slot="tap2" :info="info"/>
    </tap>
    <bottom />
  </div>
</template>

<script>
import Tap from 'components/Tap'
import add from './add'
import attention from './attention'
import Bottom from 'components/Bottom'
import { getQr } from 'api/invite'
import { redirectHost } from '@/config'

export default {
  mounted() {
    getQr(`${redirectHost}/addclient`).then((res) => {
      if (res.status === 'T') {
        this.info = res.data
      }
    })
  },
  components: {
    Tap,
    add,
    attention,
    Bottom
  },
  data() {
    return {
      info: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>