<template>
  <div class="modal-container" @mousedown="move($event)">
    <div class="context">context</div>
  </div>
</template>
<script>
import Vue from 'vue'
// export default {
Vue.directive('drag', {
  inserted: function (el, binding) {
    el.onmousedown = function (e) {
      const box = e.target.parentElement
      let odiv = e.target
      let x = e.clientX - odiv.offsetLeft
      let y = e.clientY - odiv.offsetTop
      e.target.onmousemove = (e) => {
        let left = e.clientX - x
        let top = e.clientY - y
        this.positionX = left
        this.positionY = top
        if (left <= 0) {
          left = 0
        } else if (left >= box.clientWidth - odiv.offsetWidth) {
          left = box.clientWidth - odiv.offsetWidth
        }
        if (top <= 0) {
          top = 0
        } else if (top >= box.clientHeight - odiv.offsetHeight) {
          top = box.clientHeight - odiv.offsetHeight
        }
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})
// }
</script>
<style scoped>

.modal-container {
  user-select: none;
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
