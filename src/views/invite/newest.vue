<template>
  <div>
      <p class="title">最新邀请客户</p>
      <ul class="list">
        <li class="list-item" >
          <p class="list-item-left" v-for="(item,index) in list">成都二月小森林有限公司</p>
          <p class="list-item-ritht">
            <span class="name">李田</span>
            <span class="date">2018/07/08</span>
          </p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/list.scss';

.title {
  font-size: 0.38rem;
  color: #222;
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
}
.name {
  font-size: 0.3rem;
  color: #222;
}
.date {
  font-size: 26rpx;
  color: #999;
  margin-left: 0.6rem;
}
</style>