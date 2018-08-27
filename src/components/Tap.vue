<template>
  <div class="tap" @touchstart="start" @touchend="end" >
    <div class="tap-head">
      <div class="tap-item" :class="{'active':index === 1}" @click="handleClick(1)">
          <span>{{tap1}}</span>
          <span class="line" v-show="index === 1"></span>
      </div>
      <div class="tap-item" :class="{'active':index === 2}" @click="handleClick(2)">
          <span>{{tap2}}</span>
          <span class="line"  v-show="index === 2"></span>
      </div>
    </div>
    <slot ></slot>
    <slot v-if="index === 1" name="tap1" ></slot>
    <slot v-if="index === 2" name="tap2" ></slot>
  </div>
</template>

<script>
export default {
  name: 'tap',
  props: {
    tap_index: {
      type: Number
    },
    tap1: {
      type: String,
      required: true
    },
    tap2: {
      type: String,
      required: true
    },
    // 是否需要向上刷新
    isRefresh: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      index: 1,
      pageX: 0,
      pageY: 0,
      pageXend: 0,
      pageYend: 0
    }
  },
  beforeMount() {
    sessionStorage.removeItem('refresh')
    if (this.tap_index) {
      this.index = this.tap_index
      return
    }

    let tap_index = sessionStorage.getItem('tap_index')
    if (tap_index) {
      this.index = Number(tap_index)
    }
  },
  mounted() {},
  methods: {
    setStorage() {
      sessionStorage.setItem('tap_index', this.index)
    },
    handleClick(index) {
      this.index = index
      this.setStorage()
    },
    start(e) {
      this.pageX = e.touches[0].pageX
      this.pageY = e.touches[0].pageY
    },
    // 左右滑动
    slide() {
      if (Math.abs(this.pageX - this.pageXend) > 120) {
        if (this.pageX > this.pageXend) {
          if (this.index > 1) {
            this.index = this.index - 1
            this.setStorage()
          }
        } else {
          if (this.index < 2) {
            this.index = this.index + 1
            this.setStorage()
          }
        }
      }
    },
    // 向上刷新
    refresh() {
      if (!this.isRefresh) return
      if (this.pageY - this.pageYend > 150) {
        sessionStorage.setItem('refresh', 'true')
        this.$router.go(0)
      }
    },
    end(e) {
      // 左右滑动
      this.pageXend = e.changedTouches[0].pageX
      this.pageYend = e.changedTouches[0].pageY
      this.slide()
      this.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.tap {
  height: 100vh;
}
.tap-head {
  height: 0.9rem;
  width: 100%;
  background: #fafafa;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 0.01rem solid #e5e5e5;
}
.tap-item {
  flex: 1;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  color: #222;
  position: relative;
  text-align: center;
}
.line {
  position: absolute;
  top: 0.86rem;
  width: 1rem;
  height: 0.04rem;
  background: $base_color;
  left: calc(50% - 0.5rem);
}
.active {
  color: $base_color !important;
}
</style>
