<template>
  <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
  >
      <p class="title">员工月邀请排行</p>
      <ul class="list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <p class="list-item-left">
            <img v-if="index == 0" class="icon" :src="require('images/No1.png')" alt="" />
            <span v-if="index != 0" :class="{'num1':index == 1 ||index == 2,'num2':index > 2}">{{index}}</span>
            <!-- <img class="portrait" :src="require('images/No1.png')" /> -->
            <span class="name">{{item.staff_name}}</span>
          </p>
          <p class="list-item-ritht">
            <span class="total">{{item.inviteCount}}</span>
          </p>
        </li>
      </ul>
      <load-bottom v-if="showLoadBottm"/>
  </div>
</template>

<script>
import { range } from 'api/customer'
import LoadBottom from 'components/LoadBottom'

export default {
  components: {
    LoadBottom
  },
  methods: {
    getData() {
      if (this.page >= this.last_page) return
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
  margin-left: 0.4rem;
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