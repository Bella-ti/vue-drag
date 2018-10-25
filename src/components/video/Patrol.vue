<template>
<div id="oplay" :style="{width: width +'px', height: height + 'px'}">
	<video v-if="videoSrc" id="ovideo" :controls="controls" :autoplay="autoplay" :width="width+'px'" :height="height+'px'" :preload="preload" :loop="loop" :poster="poster">
		<source :src="videoSrc" type="video/3gp" />
	</video>
	<img v-if="imgSrc" id="oImg" :src="imgSrc" @click="setImage"/>
	<div v-if="isfull" id="full-image">
		<img :src="imgSrc" id="fimg" width='100%' height="100%"/>
	</div>
</div>
</template>
<script>
/**
 * videoSrc 视频的URL
 * imgSrc 图片的URL
 * width 图片或视频区域的宽度
 * height 图片或视频区域的高度
 * 
 * 视频相关参数
 * controls 是否显示控制按钮
 * autoplay 是否自动播放
 * poster 视频封面，播放时的封面图片
 * preload 预加载(true时启动加载)
 * loop 循环播放(true时循环播放)
 */
export default {
  name: 'PatrolVideo',
  props: {
		videoSrc: {
			type: String,
			default: ''
		},
		imgSrc: {
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
			type: String | Number,
			default: '100%'
		},
		height: {
			type: String | Number,
			default: '100%'
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
	data () {
		return {
			imgW: 0,
			imgH: 0,
			isfull: false
		}
	},
	computed: {
	},
	mounted () {
		const box = document.getElementById("oplay")
		if (this.videoSrc) {
		}
		window.onload = () => {
			if (this.imgSrc) {
				const img = document.getElementById("oImg")
				this.getImgNaturalDimensions(img, box)
			}
		}
	},
	methods: {
		getImgNaturalDimensions(oImg, box) {
			box.style.display = 'flex'
			box.style.justifyContent = 'space-around'
			this.imgW = oImg.naturalWidth
			this.imgH =  oImg.naturalHeight
			if (this.imgW > this.imgH) {
				oImg.style.width = '100%'
				oImg.style.height = oImg.width*this.imgH/this.imgW + 'px'
				box.style.flexDirection = 'column'
			} else {
				oImg.style.height = '100%'
				oImg.style.width = oImg.height*this.imgW/this.imgH + 'px'
				box.style.flexDirection = 'row'
			}
		},
		setImage() {
			this.isfull = true
			
			const fullImg = document.getElementById("fimg")
			const box = document.getElementById("full-image")
			const winW = window.innerWidth
			const winH = window.innerHeight
		
		}
	},
	beforeDestroy() {
		window.onload = null
	}
}
</script>
<style scoped>
#oplay {
	background-color: #000;
}
#full-image {
	position:absolute;
	z-index: 1000;
	top: 0;
	left: 0;
	right:0;
	bottom:0;
	background-color: rgba(0,0,0,.5);
}
</style>
