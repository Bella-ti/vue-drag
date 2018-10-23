<template>
  <div>
    <!-- 多窗口拖拽实现 -->
    <div class="map-box">
      <Drag :areaClassname="'map-box'">
        <H value="111" color="red" :active='true'></H>
      </Drag>
      <Drag :areaClassname="'map-box'">
        <H  value="222" color="blue"></H>
      </Drag>
      <Drag :areaClassname="'map-box'">
        <H  value="333" color="pink"></H>
      </Drag>
    </div>
  </div>
</template>

<script>
import H from './Context.vue'
import Drag from './Drags.vue'
export default {
  name: 'DragBox',
  components: {
    Drag,
    H
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
</style>
