<template>
  <div class="container">
      <div class="statistics">
          <p class="title item-1 statistics-item">邀请客户数</p>
          <p class="item-2 statistics-item">
            <span>本周：{{statistics.weekCount}}</span>
            <span>当月：{{statistics.monthCount}}</span>
          </p>
          <div class="item-3 statistics-item">
            <p class="sub-title">今日邀请</p>
            <p class="num">{{statistics.todayCount}}</p>
          </div>
      </div>
      <p class="title">最新邀请客户</p>
      <ul class="list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <p class="list-item-left">{{item.client_name}}</p>
          <p class="list-item-ritht">
            <span class="name">{{item.contact_name}}</span>
            <span class="date">{{item.register_date}}</span>
          </p>
        </li>
      </ul>
      <load-bottom v-if="showLoadBottm"/>
      <load-bottom v-if="nodata" content="你还未邀请到客户"/>
  </div>
</template>

<script>
import LoadBottom from 'components/LoadBottom'

export default {
  props: {
    statistics: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    p: {
      type: Object,
      required: true
    }
  },
  components: {
    LoadBottom
  },
  computed: {
    showLoadBottm() {
      // eslint-disable-next-line
      if (this.p.page > this.p.last_page && this.p.last_page != 0) return true
      return false
    },
    nodata() {
      // eslint-disable-next-line
      if (this.p.last_page == 0) return true
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/list.scss';
.list-item-left {
  font-size: 0.3rem;
}
.container {
  padding-bottom: 1rem;
}
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
  font-size: 0.26rem;
  color: #999;
  margin-left: 0.6rem;
}
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
  margin-left: 0;
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