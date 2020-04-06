<template>
	<view class="content">
		 
		<view class="text-area">
		  	 <text class="ming" @click="loginOr">{{yes ? yes : no}}</text>
			   
			 
			 <text class="zhonghe">综合治疗室</text>
			 <view class="textone">
		     <text class="tui" @click="back">退出</text>				 
			 </view>
		</view>
		 
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 
				 backOrder:'',
				 no:'登录',
				 yes:''
			}
		},
		
		 
		onShow(){
			           
					  // const app=[2,3,4,4,54,34,23,23];
					  // var arrss=[];
					   
					  // const apps=app.map((value,index)=>
						 //  arrss.push({value})
					  // })
					  // const apps=app.forEach((value,index,news)=>{
						 //   arrss.push({value})
						   
					  // })
					   //console.log(arrss)
					   
					   
			 let that=this
			 uni.getStorage({
			 	key:'loginUser',
				success(e){
					//console.log(e)
			        that.yes=e.data 
				}
			 })
			 
			 　var obj1={name:'张三'};
			 　　var obj2={age:18};
			 　　for(var key in obj2){
			 　　　if(obj2.hasOwnProperty(key)===true){
			 　　　　 obj1[key]=obj2[key];
			 　　　}
			 　　}
			 　　//console.log(obj1);
			 
			 //  uni.request({
			 // 	url:'http://192.168.0.114:8888/api/app/confirmCharging/GetCurrentUser',
			 // 				method:"GET"				 
			 // }).then(data=>{
			 // 				 var [error, res]  = data;
			 // 				console.log(res)		 
			 				 
			 							 
			 // }) 
			 
			 // uni.request({
			 // 	url:'http://192.168.0.114:8888/api/app/confirmCharging/GetPatienInfo?where=m72018&StartTime=2019-09-30&projectCode=m72018',
			 // 				method:"GET"				 
			 // }).then(data=>{
			 // 				 var [error, res]  = data;
			 // 				//console.log(res)		 			 							 
			 // }) 
			 
			 let arr=[2,3,4,5,6,7]
			 arr.forEach(function(value,index,newarr){
				  //console.log(value+1)
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
								url:'./login'
							})
						}else if(res.cancel){
							console.log("取消退出登录")
						}
					}
				})
				
			},
			 
		 loginOr(){
			 if(!this.yes){
				 uni.reLaunch({
				 	url:'./login'
				 }) 
			 }
		 }
		}
	}
</script>

<style lang="scss">
	.zhonghe{
		font-size: 20px;
	}
	.tui{
		position: relative;
		left: -15px;
		font-size: 15px;
		 
	}
	 .ming{
		 position: relative;
		 left: 15px;
		 font-size: 15px;
	 }
	 
	 
	.text-area{
		width: 100%;
		height: 70px;
		background: #1296db;
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

	 
</style>
