<template>
	<view 		@touchstart="drag_start" @touchmove="drag_hmove">
		<view  	class="ball" :style="'left:'+moveX+'px;top :'+moveY+'px;'" v-if="!colse">确认</view>
		<view 	class="ball" :style="'left:'+x+'px;top :'+y+'px;'" v-else>确认</view>
	</view>
</template>

<script>
	export default {
		props: {
			x: {
				type: Number
			},
			y: {
				type: Number
			},
			title: {
				type: String
			}
		},
		data() {
			return {
				start:[0,0],
				moveY:0,
				moveX:0,
				colse:true
			}
		},
		methods: {
			drag_start(event){
				this.start[0]= event.touches[0].clientX-event.target.offsetLeft;
				this.start[1]= event.touches[0].clientY-event.target.offsetTop;
			},
			drag_hmove(event){
					let	 tag 	 = event.touches;
					this.moveX	 = tag[0].clientX-this.start[0];
					this.moveY	 = tag[0].clientY-this.start[1];
					this.colse ? this.colse = false : this.colse;
			}
		}}
</script>

<style lang="less">
	.ball{
		width: 130upx;height: 130upx;
		background:linear-gradient(to bottom, #F8F8FF,#1296db);
		border-radius: 50%;
		box-shadow: 0 0 15upx #007AFF;
		color: #fff;
		font-size: 30upx;
		display: flex;justify-content: center;align-items: center;
		position: fixed;
	}
</style>
