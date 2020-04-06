<template>
	<view class="zhu">
		<view class="cu-bar bg-black search" id="beijing">
			<view   id="backShang"  @click="back">返回</view>
			<view class="content" id="gaoyayang">
				{{checkone}}
			</view>
			<view class="action" @click="code">
				<text >扫一扫</text>
			</view>
		</view>
		<!-- <view class="heade">
			<image @click="back" id="mas" src="../../../static/fanhui.png" mode=""></image>
			<text id="fankui1">{{checkone}}</text>
			
			<text @click="code" id="ma">扫一扫</text>
		</view> -->

		<view class="body-child one">
			<input class="yes" @input="value" :value="number"  placeholder="请输入患者姓名" />
			<view id="sousuo" @click="add"><image src="../../../static/soushuo.png" mode=""></image></view>
		</view>

		<uni-swipe-action class="slide" v-if="loginyes">
			<uni-swipe-action-item
				class="items"
				v-for="(item, index) in newSwiplist"
				:options="item.options"
				:key="item.index"
				@change="swipeChange"
				@click="swipeClick($event, index)"
			>
				<view class="list">
					<view class="listContent">
						<view class="lists_child   bangs ">{{ item.patientName }}</view>
						<view class="lists_child  ">{{ item.projectName }}</view>
						<view class="lists_child   ">单价{{ item.price }}</view>
					</view>
					<view class="listContent2">
						<view class="lists_child bangs ">{{ item.wardCode }}床</view>
						<view class="lists_child">{{ item.inPatientNo }}</view>
						<view class="lists_child  ">总计{{ item.sumPrice*item.quantity }}</view>
					</view>

					<view class="tianshu">
						<view class="selects">
							<view class="delete" @click="deleteNum(index)">-</view>
							<view class="numContent">{{ item.quantity }}</view>
							<view class="add" @click="addNum(index)">+</view>
						</view>
						<text>已选{{ item.quantity }}次</text>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
<view class="dneglu" v-if="loginNo">
				请登录
			</view>
		<view class="content" @click="centerOk"><dragball :x="left" :y="top" image="http://pic27.nipic.com/20130321/9678987_225139671149_2.jpg"></dragball></view>
	</view>
</template>

<script>
import dragball from '@/components/drag-ball/drag-ball.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue';
export default {
	components: {
		uniSection,
		uniSwipeAction,
		uniSwipeActionItem,
		dragball
	},
	data() {
		return {
			loginyes:false,
			loginNo:false,
			stepperList: [
				{
					id: 10
				},
				{
					id: 20
				}
			],
			arrs: [],
			e: [],
			m: [],
			pc:[],
			isOpened: false,
			left: 290,
			top: 500,
			timeOnce: '',
			number: '',
			values: '',
			checkone:'',
			quantity: 1,
			options1: [
				{
					text: '取消置顶'
				}
			],
			options2: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],

			swipeList: [],
			newSwiplist:[]
		};
	},
	onReady() {
		this.$nextTick(() => {
			this.isOpened = true;
		});
	},
	onLoad(e) {
		 
		this.checkone=e.checkone;
		 
		this.projectCode = e.projectCode;
	},
	onShow() {
		let that=this
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
		 

		uni.getStorage({
			key: 'somebody',
			success(e) {
				that.newSwiplist = e.data;
			}
		});
	},

	methods: {
		addNum(e) {
			for (let i = 0; i < this.newSwiplist.length; i++) {
				var newarr = [];
				newarr.push(this.newSwiplist[e]);
			}
			++newarr[0].quantity;
			uni.setStorage({
				key:'somebody',
				data:this.newSwiplist
			})
		},

		deleteNum(e) {
			for (let i = 0; i < this.newSwiplist.length; i++) {
				var deletearr = [];
				deletearr.push(this.newSwiplist[e]);
			}

			if (deletearr[0].quantity <= 1) {
				deletearr[0].quantity = 1;
			} else if (deletearr[0].quantity > 1) {
				--deletearr[0].quantity;
			}
			uni.setStorage({
				key:'somebody',
				data:this.newSwiplist
			})
		},
		value(e) {
			this.number = e.target.value;
		},
		centerOk() {
			uni.showModal({
				title: '提示',
				content: '是否提交缴费',
				success: res => {
					if (res.confirm) {
						uni.showToast({
							title: '提交成功',
							duration: 2000
						});
						this.newSwiplist = [];
						uni.setStorage({
							key: 'somebody',
							data: this.newSwiplist
						});
						
						this.number = '';
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
			
             
			 
			      
			// 	var json={};
			// 	var newss=[];
			// 	for(var i=0;i<this.swipeList.length;i++){				 	
			// 			json.vistNumber=this.swipeList[i].number;	
			// 			newss.push(json)
 	 
			// 	}
				
			// 	 //console.log(newss)
			// 	  var  newsarr;
			// 	  let pc =
			// 	      {
				       
			// 	       projectCode: '88888',
			// 	       doctorCode: 'admin',
			// 	       doctorName: '管理员',
			// 	       infoType: '门诊',
			// 	       orderNo: '104009064'
			// 	      }
			// 		  let yesOr=[]
       //               for(var i=0;i<newss.length;i++){
			// 		  newsarr=Object.assign(pc,newss[i])
			// 		 //console.log(newsarr);
			// 		  yesOr.push(newsarr)
			// 	 }
			// 	 console.log(yesOr)
				 
				   
			 // uni.request({
			 // 	url:'http://192.168.0.114:8888/api/app/confirmCharging/GetCureRecord?where=43891491&startime=2019-09-30&projectCode=m72018',				 
				// method:'GET',
				 
			 // }).then(data => {
				// 	var [error, res] = data;
				// 	console.log(res)
				// 	})
            
				 
		 
			
			
		},
		code: function() {
			let that = this;

			uni.scanCode({
				success: function(res) {
					console.log('条码内容：' + res.result);
					that.number = res.result;
				}
			});
		},
		add() {
			let that = this;

			if (!this.number) {
				uni.showToast({
					title: '请输入用户信息',
					duration: 1000
				});
			} else if (this.number) {
				uni.request({
					url: 'http://192.168.0.114:8888/api/app/confirmCharging/GetChargeRefundList?kewWord='+this.number+'&beginDate=1899-01-01&endDate=2000-10-01',
					method: 'GET'
				}).then(data=> {
					var [error, res] = data;
					 console.log(res.data)
					 this.newSwiplist=res.data
					 if(this.newSwiplist==null||this.newSwiplist==''||!this.newSwiplist){
						 uni.showToast({
						 	title:'暂无患者信息',
							duration:1000
						 })
					 }else{
						 let array={};
						  let newsArrer=[]
						  for(var i=0;i<this.newSwiplist.length;i++){
						 	array=Object.assign({options: [
						 		{
						 			text: '删除',
						 			style: {
						 				backgroundColor: 'rgb(255,58,49)'
						 			}
						 		}
						 	]},this.newSwiplist[i]);
						 	newsArrer.push(array)
						  }
						  //console.log(newsArrer)
						  this.newSwiplist=newsArrer;
						  uni.setStorage({
						 	key: 'somebody',
						 	data: this.newSwiplist
						 });
						 
						 this.number = '';
					 }
					 
				});
			}
		},
		listItem() {
			let that = this;
		},
		back() {
			uni.reLaunch({
				url: '../centerPay/centerPay'
			});
		},
		bindClick(e) {
			uni.showToast({
				title: `点击了${e.content.text}按钮`,
				icon: 'none'
			});
		},
		setOpened() {
			this.isOpened = !this.isOpened;
		},
		change(e) {
			this.isOpened = e;
			console.log('返回：', e);
		},
		swipeChange(e) {
			console.log('返回：', e);
		},
		swipeClick(e, index) {
			let that = this;
			let { content } = e;
			if (content.text === '删除') {
				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							this.newSwiplist.splice(index, 1);
							uni.setStorage({
								key: 'somebody',
								data: this.newSwiplist
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else if (content.text === '添加') {
				if (this.newSwiplist.length < 100) {
					this.newSwiplist.push({
						id: new Date().getTime(),
						options: [
							{
								text: '置顶'
							},
							{
								text: '标记为已读',
								style: {
									backgroundColor: 'rgb(254,156,1)'
								}
							},
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: '新增'
					});
					uni.showToast({
						title: `添加了一条数据`,
						icon: 'none'
					});
				} else {
					uni.showToast({
						title: `最多添加一百条条数据`,
						icon: 'none'
					});
				}
			} else {
				uni.showToast({
					title: `点击了${e.content.text}按钮`,
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style>
	#beijing{
		background: #1CBBB4;
	}
	#gaoyayang{
		font-size: 16px;
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
	 
	.slide{
		 padding-bottom:53px ;
	}
.numContent {
	width: 50%;
	height: 100%;
	background: #007aff;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
}
.add {
	width: 25%;
	height: 100%;
	background: #bababa;
	display: flex;
	justify-content: center;
	align-items: center;
}
.delete {
	width: 25%;
	height: 100%;
	background: #bababa;
	display: flex;
	justify-content: center;
	align-items: center;
}
.bangs {
	padding-left: 8px;
}
.selects {
	position: absolute;
	top: 15px;
	width: 95%;
	height: 25px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.tianshu text {
	font-size: 16px;
	margin: auto;
	position: absolute;
	top: 70px;
	color: #43cf7c;
}
.tianshu {
	width: 24%;
	height: 100%;
	border-left: 1px dashed #1296db;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.la2 {
	padding-right: 30px;
}
.la1 {
	padding-left: 30px;
}
.listContent {
	width: 73%;
	height: 45%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #1296db;
}
.listContent > view {
	font-size: 16px;
}
.listContent2 {
	color: #1296db;
	width: 73%;
	height: 45%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.listContent2 > view {
	font-size: 16px;
}

#sousuo {
	z-index: 999;
	width: 40px;
	height: 40px;

	position: absolute;
	left: 306px;
	top: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
}
#sousuo image {
	width: 25px;
	height: 25px;
}
#fanhui {
	width: 25px;
	height: 25px;
}
 
#ma {
	font-size: 18px;
	color: #1296db;
	display: block;
	width: 80px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
.qian {
	font-size: 14px;
	font-weight: bold;
	color: #666666;
}
.zhang {
	font-size: 10px;
	color: #808080;
}
.ziti {
	font-size: 14px;
}
.ha {
	position: absolute;
	left: 20px;
	top: 0;
}
.he {
	position: absolute;
	left: 20px;
	top: 26px;
}
.ya {
	position: absolute;
	left: 20px;
	color: #8f8f94;
	top: 48px;
}
#mas{
	width: 30px;
	height: 30px;
	
}

.list {
	width: 96%;
	height: 123px;
	margin: auto;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 10px;
	background: #f5f5f5;
}
.ones {
	width: 45px;
	height: 14px;
	font-size: 14px;
	font-weight: bold;
}
.two {
	width: 112px;
	height: 73px;

	position: relative;
}
.tuone {
	width: 12px;
	height: 35px;
	position: absolute;
	top: 6px;
	left: 0;
}
.tutwo {
	width: 14px;
	height: 14px;
	position: absolute;
	top: 53px;
	left: 0;
}
.three {
	width: 46px;
	height: 44px;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.yes {
	width: 342px;
	height: 35px;
	border: 1px solid #b2b2b2;
	border-radius: 10px;
	padding-left: 10px;
}
.one {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.body-child {
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #f5f5f5;
	display: flex;
	align-items: center;
}
.body-child text {
	font-size: 16px;
}
.zhu {
	height: 100vh;
	
}
.heade {
	width: 90%;
	height: 100px;
	border-bottom: 1px solid #b2b2b2;
    
	position: relative;
	top: 0;
	left: 5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	 
}
.heade button {
	width: 50px;
	height: 30px;
	border-radius: 6px;

	font-size: 10px;
}
.heade text {
	font-size: 22px;

	color: #1296db;
}
.heade image {
	width: 15px;
	height: 15px;
}

page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;

	min-height: 100%;
	height: auto;
}

view {
	font-size: 14px;
	line-height: inherit;
}

.button {
	border-color: #e5e5e5;
	border-style: solid;
	border-width: 1px;

	border-radius: 4px;
}

.button-text {
	font-size: 15px;
}
</style>
