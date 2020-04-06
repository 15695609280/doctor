<template>
	<view class="pagel">
		<!-- logo start -->

		<!-- logo end -->
		<image src="../../static/1.jpg" class="images" mode=""></image>
		<!-- 账号输入 start -->
		<view class="l-account-box">
			<image src="../../static/2.png" class="users" mode=""></image>
			<input @input="onAccountInput" focus class="l-account" placeholder="请输入您的账号" placeholder-class="l-placed" />
		</view>
		<!-- 账号输入 end -->

		<!-- 密码输入 start -->
		<view class="l-account-box2">
			<image src="../../static/3.png" class="users" mode=""></image>
			<input password="true" @input="onSecrectInput" class="l-account" placeholder="请输入您的密码" placeholder-class="l-placed" />
		</view>
		<!-- 密码输入 end -->

		<!-- 提交 start -->
		<view class="l-submit-box"><button @click="submitClick" class="l-submit-btn submit">提交</button></view>
		<!-- 提交 end -->
		<view class="bottom">
			<view class="company"><image src="../../static/company.png" mode=""></image></view>
			
			<view class="dibu">上海裕铃信息科技有限公司</view>
		</view>
		
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			secrect: '', // 密码
			account: '', // 账号
			employeeName: ''
		};
	},
	onShow() {
		let that = this;
		uni.setStorage({
			key: 'loginUser',
			data: that.employeeName
		});
	},
	onLoad() {},
	methods: {
		// 实时获取密码
		onSecrectInput: function(event) {
			this.secrect = event.target.value;
		},
		// 实时获取账号
		onAccountInput: function(event) {
			this.account = event.target.value;
		},
		// 提交按钮事件
		submitClick() {
			uni.request({
				url: 'http://192.168.0.114:9904/api/user/Verify?username=' + this.account + '&pwd=' + this.secrect + '&token=1'
			}).then(data => {
				//data为一个数组，数组第一项为错误信息，第二项为返回数据
				var [error, res] = data;
				//console.log(res.data);
				// var success=res.data.hasSuccess;
			});

			uni.request({
				url: 'http://192.168.0.114:8888/api/basic/clinicdata/employee/' + this.account + '/code',
				method: 'GET'
			}).then(data => {
				var [error, res] = data;
				console.log(res.data);
				this.employeeName = res.data.employeeName;
				uni.setStorage({
					key: 'loginUser',
					data: res.data.employeeName
				});

				var timer = null;

				clearTimeout(timer);
				if (res.data.employeeName) {
					uni.showToast({
						title: '登录成功',
						duration: 1000
					});
					timer = setTimeout(() => {
						uni.reLaunch({
							url: './index'
						});
					}, 2000);
				} else if (!res.data.employeeName) {
					uni.showToast({
						title: '登录失败，请稍后重试！！',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style>
.dibu {
	width: 100%;
	height: 30px;

	/* position: absolute; */
	/* top: 480px; */
	 
	font-weight: 600;
	letter-spacing: 5px;
}
.company {
	width: 100%;
	height: 70px;
 
	/* top: 420px; */

	 
}
.company image {
	width: 50px;
	height: 50px;
}
.users {
	width: 20px;
	height: 20px;
	
	 
}
.images {
	width: 339px;
	height: 73px;
	position: absolute;
	top: 30%;
	/* position: relative;
	margin: auto; */
	/* top: -50px; */
	/* left: 20px; */
}
.l-account-box {
	width: 230px;
	 
	height: 30px;
	border-bottom: 1px solid #bababa;
	color: #808080;
	/* margin-top: 15px; */
	padding-left: 50px;
	line-height: 5px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 50%;
}
.l-account-box2{
	width: 230px;
	 
	height: 30px;
	border-bottom: 1px solid #bababa;
	color: #808080;
	/* margin-top: 15px; */
	padding-left: 50px;
	line-height: 5px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 55%;
}
.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 102px;
	 
	display: flex;
	text-align: center; 
	align-items: center;
	flex-direction: column;
}
.l-submit-box{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 65%;
}
.l-submit-btn {
	width: 287px;
	 
	background: #43cf7c;
	color: #ffffff;
	border-radius: 15px;
	/* margin-top: 20px; */
	
}
.pagel {
	/* position: relative;
	top: 300px; */
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	
}
</style>
