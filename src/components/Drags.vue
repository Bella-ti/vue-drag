<template>
  <div class="modal-container" @click="setIndex" :style="{zIndex: active?index + 1:index-1}">
    <!-- 可兼容多个同时拖拽子组件 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      box: null,
      isMove: false,
      positionX: 0,
      positionY: 0
    }
  },
  props: {
    areaClassname: {
      require: true,
      type: String,
      default: ''
    },
    // 根据 active 和 index 来设置 z-index 值
    index: {
      type: Number | String,
      default: 1
    },
    active: {
      type: Boolean,
      default: false
    },
    position: {
      type: Object,
      default: () => {
        return {
          left: 0,
          right: 0
        }
      }
    }
  },
  mounted () {
    this.box = this.$parent.$el.querySelector('.' + this.areaClassname)
    if (this.position) {
      this.$el.style.left = this.position.left + 'px'
      this.$el.style.top = this.position.top + 'px'
    }
    this.move()
  },
  methods: {
    setIndex () {
      this.$emit('update:activedIndex')
    },
    move () {
      this.isMove = false
      this.$el.addEventListener('mousedown', this.handleMouseDown)
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMoveStatus)
    },
    handleMouseDown (e) {
      this.isMove = true
      this.$emit('update:activedIndex')
      this.positionX = e.pageX - parseInt(this.$el.offsetLeft)
      this.positionY = e.pageY - parseInt(this.$el.offsetTop)
    },
    handleMouseMove (e) {
      const boxW = this.box.offsetWidth
      const boxH = this.box.offsetHeight
      const tarW = this.$el.offsetWidth
      const tarH = this.$el.offsetHeight
      if (this.isMove) {
        var left = e.pageX - this.positionX
        var top = e.pageY - this.positionY
        if (left <= 0) {
          left = 0
        } else if (left >= boxW - tarW) {
          left = boxW - tarW
        }
        if (top <= 0) {
          top = 0
        } else if (top >= boxH - tarH) {
          top = boxH - tarH
        }
        this.$el.style.left = left + 'px'
        this.$el.style.top = top + 'px'
      }
    },
    handleMoveStatus () {
      this.isMove = false
    }
  },
  beforeDestroy () {
    this.$el.removeEventListener('mousedown', this.handleMouseDown)
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseup', this.handleMoveStatus)
  }
}
</script>
<style scoped>

.modal-container {
  user-select: none;
  position: absolute;
  width: 100px;
  height: 100px;
}
</style>
