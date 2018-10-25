<template>
<div class="patrol-box">
<!-- <PatrolVideo :videoSrc="videoSrc" :width="width" :height="height"></PatrolVideo> -->
<PatrolVideo :imgSrc="imgSrc" :width="width" :height="height"></PatrolVideo>
</div>
</template>
<script>
import PatrolVideo from './Patrol'
export default {
  components: {
    PatrolVideo
  },
  name: 'PatrolDemo',
  data () {
    return {
			videoSrc: '../../../static/video/video_20181025_163247.mp4', // VID_20181024_151144  VID_20150101_045039 VID_20181024_151014  video_20181002_163054.mp4 video_20181004_125259.mp4
			controls: true,
			autoplay: true,
			poster: '',
			preload: true,
			loop: false,
			width:500,
			height: 500,
			imgSrc:'../../../static/image/IMG_20150101_044839.jpg'// IMG_20150101_044839  IMG_20180102_045219 IMG_20181002_144431.jpg
    }
  }
}
</script>
<style scoped>
  .patrol-box {
    width: 500px;
    height:500px;
		background-color: #000;
  }
</style>
