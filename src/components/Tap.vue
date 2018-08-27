<template>
  <div class="tap" @touchstart="start" @touchend="end" >
    <div class="tap-head">
      <div class="tap-item" :class="{'active':index_tap === 1}" @click="index = 1">
          <span>{{tap1}}</span>
          <span class="line" v-show="index === 1"></span>
      </div>
      <div class="tap-item" :class="{'active':index_tap === 2}" @click="index = 2">
          <span>{{tap2}}</span>
          <span class="line"  v-show="index === 2"></span>
      </div>
    </div>
    <slot ></slot>
    <slot v-if="index_tap === 1" name="tap1"></slot>
    <slot v-if="index_tap === 2" name="tap2"></slot>
  </div>
</template>

<script>
export default {
  name: 'tap',
  props: {
    index: {
      type: Number,
      default: () => 1
    },
    tap1: {
      type: String,
      required: true
    },
    tap2: {
      type: String,
      required: true
    }
  },
  computed: {
    index_tap() {
      return this.index
    }
  },
  data() {
    return {
      pageX: 0,
      pageY: 0
    }
  },
  mounted() {},
  methods: {
    start(e) {
      this.pageX = e.touches[0].pageX
      this.pageY = e.touches[0].pageY
    },
    end(e) {
      const pageX2 = e.changedTouches[0].pageX
      if (Math.abs(this.pageX - pageX2) > 30) {
        if (this.pageX > pageX2) {
          if (this.index > 1) {
            this.index = this.index - 1
            return
          }
        } else {
          if (this.index < 2) {
            this.index = this.index + 1
            return
          }
        }
      }

      const pageY2 = e.changedTouches[0].pageY
      if (Math.abs(this.pageY - pageY2) > 30) {
        location.reload()
      }
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
