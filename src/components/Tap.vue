<template>
  <div class="tap">
    <div class="tap-head">
      <div class="tap-item" :class="{'active':index === 1}" @click="index = 1">
          <span>{{tap1}}</span>
          <span class="line" v-show="index === 1"></span>
      </div>
      <div class="tap-item" :class="{'active':index === 2}" @click="index = 2">
          <span>{{tap2}}</span>
          <span class="line"  v-show="index === 2"></span>
      </div>
    </div>
    <slot ></slot>
    <slot v-if="index === 1" name="tap1"></slot>
    <slot v-if="index === 2" name="tap2"></slot>
  </div>
</template>

<script>
export default {
  name: 'tap',
  props: {
    tap1: {
      type: String,
      required: true
    },
    tap2: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      index: 1
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
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
