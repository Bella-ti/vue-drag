<!--遮罩-->
<template>
  <div class="video-call">
    <span v-if="!isPlaying" class="icon iconfont icon-play" @click="openVideo"></span>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    openVideo() {
    },
    closeVideo() {
    },
    videoRecording() {
     
    }
  },
  mounted() {
  },
  beforeDestroy() {
  }
}
</script>
<style scoped>
.video-call {
  width: 100%;
  height: 100%;
  padding: 0px 5px;
  background-color: #1c3053;
  display: flex;
  justify-content: center;
  align-items:center;
}
.video-call .icon-play {
  font-size: 60px;
  line-height: 60px;
  cursor: pointer;
}
.btn-con {
  line-height: 30px;
  display:inline-block;
  margin-left:10px;
}
.btn-con span {
  user-select: none;
  cursor: pointer;
}
.btn-con .icon-Cancellation,
.btn-con .icon-videotape-stop,
.btn-con .icon-videotape {
  border: 0 none;
  background: transparent;
  color: #fff;
  padding: 0 5px;
  outline: 0 none;
}
.btn-con .icon-Cancellation:hover,
.btn-con .icon-videotape-stop:hover,
.btn-con .icon-videotape:hover {
  color: #20adff;
}
</style>
