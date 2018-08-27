<template>
  <div class="customer">
    <tap tap1="我的邀请" tap2="员工排行">
        <newest  slot="tap1" :key="new Date().getTime() + Math.random()"/>
        <range slot="tap2" :key="new Date().getTime() + Math.random()"/>
    </tap>
    <bottom />
  </div>
</template>

<script>
import Tap from 'components/Tap'
import newest from './newest'
import range from './range'
import Bottom from 'components/Bottom'

export default {
  components: {
    Tap,
    newest,
    range,
    Bottom
  }
}
</script>