<template>
  <div
      class="container"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
  >
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
      <p class="title">员工月邀请排行</p>
      <ul class="list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <p class="list-item-left">
            <img v-if="index == 0" class="icon" :src="require('images/No1.png')" alt="" />
            <span v-if="index != 0" :class="{'num1':index == 1 ||index == 2,'num2':index > 2}">{{index+1}}</span>
            <!-- <img class="portrait" :src="require('images/No1.png')" /> -->
            <span class="name">{{item.staff_name}}</span>
          </p>
          <p class="list-item-ritht">
            <span class="total">{{item.inviteCount}}</span>
          </p>
        </li>
      </ul>
      <load-bottom v-if="showLoadBottm"/>
      <load-bottom v-if="nodata" content="暂无内容"/>
  </div>
</template>

<script>
import { range, allStatistics } from 'api/customer'
import LoadBottom from 'components/LoadBottom'

export default {
  components: {
    LoadBottom
  },
  mounted() {
    allStatistics().then((res) => {
      if (res.status === 'T') {
        this.todayCount = res.data.todayCount
        this.weekCount = res.data.weekCount
        this.monthCount = res.data.monthCount
      }
    })
  },
  methods: {
    getData() {
      // eslint-disable-next-line
      if (this.page > this.last_page) return
      range(this.page, this.pageSize).then((res) => {
        if (res.status === 'T') {
          this.list = [...this.list, ...res.data]
          this.last_page = res.pagination.last_page
          this.page++
        }
      })
    },
    loadMore() {
      this.getData()
    }
  },
  data() {
    return {
      list: [],
      page: 1,
      pageSize: 12,
      last_page: 1,
      todayCount: 0,
      weekCount: 0,
      monthCount: 0
    }
  },
  computed: {
    showLoadBottm() {
      // eslint-disable-next-line
      if (this.page > this.last_page && this.last_page != 0) return true
      return false
    },
    nodata() {
      // eslint-disable-next-line
      if (this.last_page == 0) return true
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/list.scss';
.container {
  padding-bottom: 1rem;
}
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
  margin-left: -0.15rem;
}
.total {
  font-size: 0.3rem;
  color: #222;
}
.name {
  margin-left: 0.4rem;
  font-size: 0.3rem;
  color: #222;
}
.list-item:first-child {
  .name {
    margin-left: 0.2rem;
  }
}
.num1 {
  color: #f5673a;
  font-size: 0.3rem;
}
.num2 {
  color: #222;
  font-size: 0.3rem;
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