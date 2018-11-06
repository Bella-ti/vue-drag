<template>
<div>
  <!-- 巡更 单兵 消息视频组件 -->
  <div id="oplay" :style="{width: width +'px', height: height + 'px'}">
    <video v-if="url && type==='video'" id="ovideo" :controls="controls" :autoplay="autoplay" :width="width+'px'" :height="height+'px'" :preload="preload" :loop="loop" :poster="poster">
      <source :src="sourceUrl"/>
    </video>
    <img v-if="url && type==='image'" id="oImg" :style="{maxWidth: width +'px', maxHeight: height + 'px'}" :src="sourceUrl" @click="setImage"/>
  </div>

  <div v-if="isfull" id="full-image" :style="{width: fullWidth + 'px', height: fullHeight + 'px'}">
    <img :src="sourceUrl" id="fimg" />
    <span class="icon iconfont icon-close1" @click="isfull = false"></span>
  </div>
</div>
</template>
<script>
/**
 * url 视频或图片的ID,必须
 * type video/image  用于区别显示的是图片还是视频,必须
 * width 图片或视频区域的宽度,必须
 * height 图片或视频区域的高度,必须
 *
 * 视频相关参数
 * controls 是否显示控制按钮
 * autoplay 是否自动播放
 * poster 视频封面，播放时的封面图片
 * preload 预加载(true时启动加载)
 * loop 循环播放(true时循环播放)
 */
export default {
  name: 'Patrol',
  props: {
    url: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    controls: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    poster: {
      type: String,
      default: ''
    },
    preload: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isfull: false,
      fullWidth: window.innerWidth,
      fullHeight: window.innerHeight - 72
    }
  },
  computed: {
    sourceUrl() {
      return this.url
    }
  },
  methods: {
    setImage() {
      // 点击图片全屏显示
      this.fullWidth = window.innerWidth
      this.fullHeight = window.innerHeight - 72
      this.isfull = true
    }
  },
  beforeDestroy() {
  }
}
</script>
<style scoped>
#oplay {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items:center;
}
#full-image {
  margin-top: 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items:center;
}
#oImg,
#fimg {
  width: auto;
  height: auto;
}
#fimg {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
}
.icon-close1 {
  position: absolute;
  right: 15px;
  top: 15px;
  color: #fff;
  cursor: pointer;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
}
.icon-close1:hover {
  color: #fff;
  background-color: red;
}
</style>
