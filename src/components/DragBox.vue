<template>
  <div>
    <!-- 多窗口拖拽实现 -->
    <div class="map-box">
       <Drag :areaClassname="'map-box'" v-for="(item,j) in videolist" :key="j" :position="item.position" @update:activedIndex="setIndex(j)" :active="item.active" :index="activeIndex">
        <H :value="item.value" :color="item.color"></H>
      </Drag>
    </div>
    <button @click="changeData">button</button>
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
          color: 'red',
          active: false,
          position: {
            left: 100,
            top: 100
          }
        },
        {
          value: '222',
          color: 'blue',
          active: false
        },
        {
          value: '333',
          color: 'yellow',
          active: false
        },
        {
          value: '444',
          color: 'pink',
          active: false
        }
      ]
    }
  },
  methods: {
    changeData () {
      this.videolist.shift()
      this.videolist.push({
        value: '555',
        color: 'purple',
        active: false
      })
    },
    setIndex (j) {
      for (let i in this.videolist) {
        this.videolist[i].active = false
      }
      this.videolist[j].active = true
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
