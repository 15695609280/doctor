<template>
	<view>
		<view class="cu-bar bg-black search" id="beijing">
			<view   id="backShang"  @click="loginOr">{{yes ? yes : no}}</view>
			<view class="content" id="gaoyayang">
				收费
			</view>
			<view class="action" @click="back">
				<text >退出</text>
			</view>
		</view>
		<!-- <view class="text-areas">
		  	 <text id="mings" @click="loginOr">{{yes ? yes : no}}</text>
			 <text id="zhonghe">收费</text>
			 <view class="textone">
		     <text id="tui" @click="back">退出</text>
				 
			 </view>
			 
		</view> -->
		<view class="bodyone">
			<view class="body-child one">
				<input class="yes"  placeholder="自动获得焦点" />
				<image src="../../../static/soushuo.png" mode=""></image>
			</view>
			<view class="concne" v-if="loginyes">
				<view class="body-child" @click="okOne">
				   <text>{{checkone}}</text>
				</view>
				<view class="body-child child" @click="ok">
					 <text>{{checktwo}}</text>
				</view>
				 
				 
			</view>
			<view class="dneglu" v-if="loginNo">
				请登录
			</view>
						
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				 
				 loginyes:false,
				 loginNo:false,
				 backOrder:'',
				 no:'登录',
				 yes:'',
				 checkone:'',
				 checktwo:'',
				 projectCode1:'',
				 projectCode2:''
			}
		},
		onShow(){
			let that=this
			uni.getStorage({
				key:'checkone',
				success(e) {
					that.checkone=e.data;
				}
			})
			uni.getStorage({
				key:'checktwo',
				success(e) {
					that.checktwo=e.data;
				}
			})
			 uni.getStorage({
			 	key:'loginUser',
				success(e){
					//console.log(e)
			        that.yes=e.data 
				}
			 })
			 if(this.yes){
				 this.loginyes=true;
				 this.loginNo=false;
			 }else if(!this.yes){
				 this.loginyes=false;
				 this.loginNo=true;
			 }
			 
			  uni.request({
			  	url:'http://192.168.0.114:8888/api/app/confirmCharging/GetDoctorProject?doctorCode=admin',
			  				method:"GET"				 
			  }).then(data=>{
			  				 var [error, res]  = data;
							 console.log(res.data)
			  				 this.projectCode1=res.data[0].projectCode;
							 this.projectCode2=res.data[1].projectCode;
							 this.checkone=res.data[0].projectName;
							 this.checktwo= res.data[1].projectName;
							 uni.setStorage({
							 	key:'checkone',
								data:this.checkone
							 })
							 uni.setStorage({
							 	key:'checktwo',
							  	data:this.checktwo
							 })
			  })
			 
		},
		methods: {
			back(){
				let that=this;
				uni.showModal({
					title:'提示',
					content:'确认退出吗?',
					success(res) {
						if(res.confirm){
							uni.setStorage({
								key:'loginUser',
								data:that.backOrder
							})
							uni.showToast({
								title:'退出成功',
								duration:2000
							})
							uni.reLaunch({
								url:'../login'
							})
						}else if(res.cancel){
							console.log("取消退出登录")
						}
					}
				})
				
			},
		okOne(){
			uni.reLaunch({
				url:'../payload/payload?projectCode='+this.projectCode1+'&checkone='+this.checkone+''
			}) 	
		},
		 loginOr(){
			 if(!this.yes){
			 	  uni.reLaunch({
			 		 url:'../login'
			      }) 
			 }
		 },
		 ok(){
			 uni.reLaunch({
			 	url:'../payload/payload?projectCode='+this.projectCode2+'&checkone='+this.checktwo+''
			 }) 
		 },
		 anshi(){
			 uni.reLaunch({
			 	url:'../About'
			 })
		 }
		}
	}
	
</script>

<style>
	#beijing{
		background: #1CBBB4;
		height: 70px;
	}
	#gaoyayang{
		font-size: 20px;
	}
	#backShang{
		padding-left: 10px;
		 
	}
	#zitidax{
		font-size: 24px;
	}
	 .saoma{
		 position: absolute;
		 left: 60%;
	 }
	 
	.dneglu{
		width: 100%;
		height: 60px;
		font-size: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 20px;
		color: #1296DB;
		position: relative;
		top: 200px;
	}
	#zhonghe{
		font-size: 20px;
	}
	#tui{
		position: relative;
		left: -15px;
		font-size: 15px; 
	}
	 #mings{
		 position: relative;
		 left: 15px;
		 font-size:15px;
	 }
	.child{
		background: #F5F5F5;
	}
	.concne{
		position: relative;
		 top: 20px;
	}
	.yes{
		width: 342px;
		height: 35px;
		border: 1px solid  #B2B2B2;
		border-radius: 10px;
		padding-left: 10px;
	}
	.one{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.one image{
		width: 25px;
		height: 25px;
		position: absolute;
		left: 320px;
		top: 20px;
		 
	}
	 
	.body-child{
		width: 100%;
		height: 60px;
		 
		display: flex;
		align-items: center;
		color: #1CBBB4; 
		 
		 
		 
	}
	.body-child text{
		font-size: 18px;
		padding-left: 10px;
		  
		
	}
	.mings{
		font-size: 22px;
		font-weight: bold;
		 
	}
	 
	.text-areas{
		width: 100%;
		height: 70px;
		background:  #1CBBB4;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		 
		 
		color: #FFFFFF;
		 
	}
	 .tab{
		 width: 100%;
		 height: 58px;
		 background: #999999;
		 position: fixed;
		 left: 0;
		 right: 0;
		 bottom: 0;
	 }
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.bodyone{
		width: 100%;
		position: relative;
		 
		top: 12px;
		
	}
		
	 
</style>
