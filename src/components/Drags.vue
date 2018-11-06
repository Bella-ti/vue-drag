<template>
  <!-- 可兼容多个窗口时的拖拽 -->
  <div class="modal-container" @click="setIndex" :style="{zIndex: active?index + 1:index-1}">
    <slot></slot>
  </div>
</template>
<script>
/**
 * boxSize 可拖拽区域大小,该大小相较于父元素而言
 * areaClassname 可拖拽的区域的classname,为该组件的父级元素 
 * index 设置的z-index
 * active 是否为焦点窗口
 * position 窗口默认显示位置
 * $emit('setzIndex') 触发点击事件
 */
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
    boxSize: {
      type: Object,
      default: () => {
        return {
          width: 0,
          height: 0
        }
      }
    },
    areaClassname: {
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
  computed: {
    boxW() {
      if (this.boxSize.width && this.boxSize.height) {
        return this.boxSize.width
      } else if (this.box) {
        return this.box.clientWidth
      } else {
        return window.innerWidth
      }
    },
    boxH() {
      if (this.boxSize.width && this.boxSize.height) {
        return this.boxSize.height
      } else if (this.box) {
        return this.box.clientHeight
      } else {
        return window.innerHeight - 72
      }
    }
  },
  methods: {
    setIndex () {
      this.$emit('setzIndex')
    },
    move () {
      this.isMove = false
      this.$el.addEventListener('mousedown', this.handleMouseDown, true)
      document.addEventListener('mousemove', this.handleMouseMove, true)
      document.addEventListener('mouseup', this.handleMoveStatus, true)
    },
    handleMouseDown (e) {
      this.isMove = true
      this.$emit('setzIndex')
      this.positionX = e.clientX - parseInt(this.$el.offsetLeft)
      this.positionY = e.clientY - parseInt(this.$el.offsetTop)
    },
    handleMouseMove (e) {
      if (this.isMove) {
        e = window.event || e
        const tarW = this.$el.scrollWidth
        const tarH = this.$el.scrollHeight
        var left = e.clientX - this.positionX
        var top = e.clientY - this.positionY
        if (left <= 0) {
          left = 0
        } else if (left >= this.boxW - tarW) {
          left = this.boxW - tarW
        }
        if (top <= 0) {
          top = 0
        } else if (top >= this.boxH - tarH) {
          top = this.boxH - tarH
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
    this.box = null
  }
}
</script>
<style scoped>

.modal-container {
  user-select: none;
  position: absolute;
}
</style>
