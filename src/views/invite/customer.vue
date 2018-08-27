<template>
  <div
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  class="customer">
    <tap tap1="我的邀请" tap2="员工排行" @change="change">
        <newest  slot="tap1" :statistics="s1" :list="d1" :p="p1"/>
        <range-page slot="tap2" :statistics="s2" :list="d2" :p="p2"/>
    </tap>
    <bottom />
  </div>
</template>

<script>
import Tap from 'components/Tap'
import newest from './newest'
import rangePage from './range'
import Bottom from 'components/Bottom'
import { range, allStatistics, newestList, statistics } from 'api/customer'

export default {
  components: {
    Tap,
    newest,
    rangePage,
    Bottom
  },
  mounted() {
    statistics().then((res) => {
      if (res.status === 'T') {
        this.s1.todayCount = res.data.todayCount
        this.s1.weekCount = res.data.weekCount
        this.s1.monthCount = res.data.monthCount
      }
    })

    allStatistics().then((res) => {
      if (res.status === 'T') {
        this.s2.todayCount = res.data.todayCount
        this.s2.weekCount = res.data.weekCount
        this.s2.monthCount = res.data.monthCount
      }
    })
  },
  data() {
    return {
      index: 1,
      s1: {
        todayCount: 0,
        weekCount: 0,
        monthCount: 0
      },
      s2: {
        todayCount: 0,
        weekCount: 0,
        monthCount: 0
      },
      p1: {
        page: 1,
        pageSize: 10,
        last_page: 1
      },
      p2: {
        page: 1,
        pageSize: 10,
        last_page: 1
      },
      d1: [],
      d2: [],
      first: true
    }
  },
  methods: {
    change(i) {
      this.index = i
    },
    getData1() {
      if (this.p1.page > this.p1.last_page) return
      newestList(this.p1.page, this.p1.pageSize).then((res) => {
        if (res.status === 'T') {
          this.d1 = [...this.d1, ...res.data]
          this.p1.last_page = res.pagination.last_page
          this.p1.page++
        }
      })
    },
    getData2() {
      if (this.p2.page > this.p2.last_page) return
      range(this.p2.page, this.p2.pageSize).then((res) => {
        if (res.status === 'T') {
          this.d2 = [...this.d2, ...res.data]
          this.p2.last_page = res.pagination.last_page
          this.p2.page++
        }
      })
    },
    loadMore() {
      if (this.first) {
        this.getData1()
        this.getData2()
        this.first = false
        return
      }
      if (this.index === 1) {
        this.getData1()
      }
      if (this.index === 2) {
        this.getData2()
      }
    }
  }
}
</script>