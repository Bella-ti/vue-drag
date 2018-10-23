<template>
  <div>
    <!-- 多窗口拖拽实现 -->
    <div class="map-box">
       <Drag :areaClassname="'map-box'" v-for="(item,j) in videolist" :key="j" @update:activedIndex="setIndex(j)" :index="activeIndex">
        <H :value="item.value" :color="item.color"></H>
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
  },
  data () {
    return {
      activeIndex: 1,
      videolist: [
        {
          value: '111',
          color: 'red'
        },
        {
          value: '222',
          color: 'blue'
        },
        {
          value: '333',
          color: 'yellow'
        },
        {
          value: '444',
          color: 'pink'
        }
      ]
    }
  },
  methods: {
    setIndex (i) {
      console.log(i, 'setIndex')
      this.activeIndex = i
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
</style>
