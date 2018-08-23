<template>
  <div
       v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
  >
      <p class="title">最新邀请客户</p>
      <ul class="list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <p class="list-item-left">{{item.company_name}}</p>
          <p class="list-item-ritht">
            <span class="name">{{item.client_name}}</span>
            <span class="date">{{item.register_date}}</span>
          </p>
        </li>
      </ul>
      <load-bottom v-if="showLoadBottm"/>
  </div>
</template>

<script>
import { newestList } from 'api/customer'
import LoadBottom from 'components/LoadBottom'

export default {
  components: {
    LoadBottom
  },
  methods: {
    getData() {
      if (this.page >= this.last_page) return
      newestList(this.page, this.pageSize).then((res) => {
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
      pageSize: 8,
      last_page: 100
    }
  },
  computed: {
    showLoadBottm() {
      if (this.page >= this.last_page) return true
      return false
    }
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