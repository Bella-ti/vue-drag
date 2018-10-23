<template>
<!-- 单窗口拖拽模板 -->
<!-- <div class="map-box" > -->
  <div class="modal-container" @mousedown="move($event)">
    <!-- <slot></slot> -->
    <div class="context">context</div>
  </div>
<!-- </div> -->
</template>
<script>
export default {
  data () {
    return {
      box: null,
      isMouseDown: false
    }
  },
  props: {
    areaClassname: {
      require: true,
      type: String,
      default: ''
    }
  },
  mounted () {
    this.box = this.$parent.$el.querySelector('.' + this.areaClassname)
  },
  methods: {
    move (e) {
      if (this.isMouseDown) return
      this.isMouseDown = true
      let odiv = e.target
      let x = e.clientX - odiv.offsetLeft
      let y = e.clientY - odiv.offsetTop
      document.onmousemove = (e) => {
        let left = e.clientX - x
        let top = e.clientY - y
        this.positionX = left
        this.positionY = top
        if (left <= 0) {
          left = 0
        } else if (left >= this.box.clientWidth - odiv.offsetWidth) {
          left = this.box.clientWidth - odiv.offsetWidth
        }
        if (top <= 0) {
          top = 0
        } else if (top >= this.box.clientHeight - odiv.offsetHeight) {
          top = this.box.clientHeight - odiv.offsetHeight
        }
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = (e) => {
        this.isMouseDown = false
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>
<style scoped>
.map-box {
  width: 600px;
  height: 600px;
  z-index: 1000;
  position: absolute;
  border: 1px solid #000;
}
.context, .modal-container {
  position: absolute;
  width: 100px;
  height: 100px;
}
.context {
  width: 100px;
  height: 100px;
  background-color: rgba(0,0,0,.3);
}
</style>
