<template>
<div>
  <!-- 内容组件 -->
  <div class="context" :style="{backgroundColor: color}">context{{value}}</div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>
<style scoped>
.context {
  position: absolute;
  width: 100px;
  height: 100px;
  /* background-color: rgba(0,0,0,.3); */
}
</style>
