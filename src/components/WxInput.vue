<template>
  <input
    :style="{'width':width}"
    :type="type"
    :class="{'faild':valid === 'faild'}"
    v-model="v"
    ref="wx-input"
    class="wx-input"
  />
</template>

<script>
export default {
  props: {
    value: {},
    // input宽度
    width: {
      type: String,
      default: '100%'
    },
    // 非空验证
    isRequest: {
      type: Boolean,
      default: () => false
    },
    // input类型
    type: {
      type: String,
      default: 'text'
    },
    // 需要验证的方法
    rule: {
      type: Array,
      default: () => []
    },
    // 验证函数
    ruleFn: {
      type: Function,
      // false验证失败，true验证成功
      default: () => true
    },
    onblur: {
      type: Function,
      default: () => {}
    },
    onchange: {
      type: Function,
      default: () => {}
    },
    onkeyup: {
      type: Function,
      default: () => {}
    },
    emptyTip: {
      type: String,
      default: () => '不能为空'
    }
  },
  data() {
    return {
      v: this.value,
      valid: 'success',
      errorTip: ''
    }
  },
  mounted() {
    let input = this.$refs['wx-input']
    Object.keys(this._props)
      .filter((key) => key.startsWith('on'))
      .forEach((key) =>
        input.addEventListener(
          key.slice(2),
          () => {
            if (this.rule.includes(key.slice(2))) this.validate()
            let errorTip = this.valid === 'faild' ? this.errorTip : ''
            if (!this.v && this.isRequest) errorTip = this.emptyTip
            // eslint-disable-next-line
            this[key].call(this, errorTip)
          },
          false
        )
      )
  },
  methods: {
    validate() {
      // eslint-disable-next-line
      let { result, tip = '错误' } = this.ruleFn.call(this, this.v)
      let errorTip = result === 'faild' ? tip : ''
      if (!this.v && this.isRequest) {
        errorTip = this.emptyTip
        result = 'faild'
      }
      this.errorTip = errorTip
      this.valid = result

      return errorTip
    }
  },
  watch: {
    v(val) {
      this.$emit('input', val)
    }
  },
  beforeDestroy() {
    this.$refs['wx-input'] = null
  }
}
</script>

<style lang="scss" scoped>
.wx-input {
  height: 0.7rem;
  line-height: 0.7rem;
  background: #f6f6f6;
  box-sizing: border-box;
  padding: 0.15rem 0.1rem;
  border-radius: 0.07rem;
}
.faild {
  border: 0.01rem solid $base_error;
  background: #fff;
}
</style>
