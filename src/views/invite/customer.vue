<template>
  <div class="customer">
    <tap tap1="我的邀请" tap2="员工排行">
        <div class="statistics">
          <p class="title item-1 statistics-item">邀请客户数</p>
          <p class="item-2 statistics-item">
            <span>本周：{{weekCount}}</span>
            <span>当月：{{monthCount}}</span>
          </p>
          <div class="item-3 statistics-item">
            <p class="sub-title">今日邀请</p>
            <p class="num">{{todayCount}}</p>
          </div>
        </div>
        <newest slot="tap1"/>
        <range slot="tap2"/>
    </tap>
    <bottom />
  </div>
</template>

<script>
import Tap from 'components/Tap'
import newest from './newest'
import range from './range'
import Bottom from 'components/Bottom'
import { statistics } from 'api/customer'

export default {
  components: {
    Tap,
    newest,
    range,
    Bottom
  },
  data() {
    return {
      todayCount: 0,
      weekCount: 0,
      monthCount: 0
    }
  },
  mounted() {
    statistics().then((res) => {
      if (res.status === 'T') {
        this.todayCount = res.data.todayCount
        this.weekCount = res.data.weekCount
        this.monthCount = res.data.monthCount
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.customer {
  padding-bottom: 1.5rem;
}
.statistics {
  margin: 0.3rem auto 0.5rem;
  width: calc(100% - 0.6rem);
  height: 2.52rem;
  position: relative;
  border-radius: 0.05rem;
  background: linear-gradient(to right, #f77d58, #f45e2d);
}
.statistics-item {
  color: #fff;
  position: absolute;
}
.item-1 {
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
  font-size: 0.38rem;
}
.item-2 {
  left: 0.4rem;
  bottom: 0.35rem;
  font-size: 0.28rem;
  > span:first-child {
    margin-right: 0.4rem;
  }
}
.item-3 {
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  .sub-title {
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
  }
  .num {
    font-size: 0.68rem;
  }
}
</style>