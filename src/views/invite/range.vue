<template>
  <div>
      <p class="title">员工月邀请排行</p>
      <ul class="list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <p class="list-item-left">
            <img v-if="index == 0" class="icon" :src="require('images/No1.png')" alt="" />
            <span :class="{'num1':index == 1 ||index == 2,'num2':index > 2}">1</span>
            <img class="portrait" :src="require('images/No1.png')" />
            <span class="name">阿婷</span>
          </p>
          <p class="list-item-ritht">
            <span class="total">65465</span>
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
.portrait {
  height: 0.64rem;
  line-height: 0.64rem;
  margin: 0 0.4rem 0 0.24rem;
  border-radius: 50%;
}
.icon {
  width: 0.46rem;
}
.total {
  font-size: 0.3rem;
  color: #222;
}
.name {
  font-size: 0.3rem;
  color: #222;
}
.num1 {
  color: #f5673a;
  font-size: 0.3rem;
}
.num2 {
  color: #222;
  font-size: 0.3rem;
}
</style>