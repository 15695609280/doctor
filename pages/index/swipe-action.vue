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
		 <!-- <view class="cu-bar bg-white">
		 	<view class="action" @click="back">
		 		<text class="cuIcon-back text-gray"></text> 返回
		 	</view>
		 	<view class="content text-bold " id="zitidax">
		 		{{checkone}}
		 	</view>
			<view class="content text-bold saoma"  >
				<text @click="code"  >扫一扫</text>
			</view>
		 </view> -->
		<!-- <view class="heade">
			<image id="fanhui" @click="back" src="../../static/fanhui.png" mode=""></image>
			<text  class="diankui">{{checkone}}</text>
			 
			<text @click="code" id="ma">扫一扫</text>
		</view> -->

		<view class="body-child one">
			<input class="yes" @input="value" :value="number" placeholder="自动获得焦点" />
			<view id="sousuo" @click="add"><image src="../../static/searchOne.png" mode=""></image></view>
		</view>
		
	    <!-- 这是模态框 -->
          <view   class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
          	<view class="cu-dialog">
          		<view class="cu-bar bg-white justify-end">
          			<view class="content">请输入要修改的次数</view>
          			<view class="action" @tap="hideModal">
          				<text class="cuIcon-close text-red"></text>
          			</view>
          		</view>
          		<view class="padding-xl">
          			<view class="cu-form-group">
          				<view class="title">已来次数</view>
          				<input placeholder="请输入要修改的次数" @input="changeNumber" name="input"></input>
          			</view>
          		</view>
          		<view class="cu-bar bg-white justify-end">
          			<view class="action">
          				<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
          				<button class="cu-btn bg-green margin-left" @tap="hideModalyes">确定</button>
                    
          			</view>
          		</view>
          	</view>
          </view> 
          	 
          
              
		<uni-swipe-action>
			<uni-swipe-action-item
				class="items"
				v-for="(item, index) in swipeList"
				:options="item.options"
				:key="item.index"
				@change="swipeChange"
				@click="swipeClick($event, index)"
			>
			    
				<view class="list">
					
					<view class="listContent">
						<view class="lists_child   bangs ">{{ item.name }}</view>
						<view class="lists_child  ">{{ item.holder }}</view>
						<view class="lists_child   ">{{ item.age }}岁</view>
					</view>
					<view class="listContent2">
						<view class="lists_child bangs ">{{ item.bed==null ? lala : item.bed }}床</view>
						<view class="lists_child">+{{ item.number }}</view>
						<view class="lists_child  ">{{ item.hostipalnum==null ? lala : item.hostipalnum}}病区</view>
					</view>

					<view class="tianshu" @click="yyyy(index)">
						<button class="cu-btn bg-green shadow xiugaiDay"  @tap="showModal" data-target="DialogModal1">修改</button>
						<!-- <view class="selects">
							<view class="delete" @click="deleteNum(index)">-</view>
							<view class="numContent">{{ item.selectNumber }}</view>
							<view class="add" @click="addNum(index)">+</view>
						</view> -->
						<text>已来{{ item.selectNumber }}次</text>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<view class="content" @click="centerOk"><dragball :x="left" :y="top" image="http://pic27.nipic.com/20130321/9678987_225139671149_2.jpg"></dragball></view>
	</view>
</template>

<script>
	import vcol from '@/components/lml-layout/col.vue'
	import vrow from '@/components/lml-layout/row.vue'
import dragball from '@/components/drag-ball/drag-ball.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue';
export default {
	components: {
		uniSection,
		uniSwipeAction,
		uniSwipeActionItem,
		dragball,
		 vrow,
		 vcol
	},
	data() {
		return {
			CustomBar: this.CustomBar,
			lala:'',
			 
			modalName: null,
			radio: 'radio1',
			checkbox: [{
				value: 0,
				name: '10元',
				checked: false,
				hot: false,
			}, {
				value: 1,
				name: '20元',
				checked: true,
				hot: false,
			}, {
				value: 2,
				name: '30元',
				checked: true,
				hot: true,
			}, {
				value: 3,
				name: '60元',
				checked: false,
				hot: true,
			}, {
				value: 4,
				name: '80元',
				checked: false,
				hot: false,
			}, {
				value: 5,
				name: '100元',
				checked: false,
				hot: false,
			}],
			 
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
			pc: [],
			isOpened: false,
			left: 290,
			top: 500,
			timeOnce: '',
			number: '',
			values: '',
			selectNumber: 1,
			projectCode: '',
			statusCode: '',
			orderNo:'',
			as:'',
			centerNumber:'',
			hostipalnum:'',
			bed:'',
			checkone:'',
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

			swipeList: []
		};
	},
	onReady() {
		this.$nextTick(() => {
			this.isOpened = true;
		});
	},
	onShow() {
		let that = this;

		uni.getStorage({
			key: 'add',
			success(e) {
				that.swipeList = e.data;
			}
		});
	},
	onLoad(e) {
		 
		this.checkone=e.checkone;
		 
		this.projectCode = e.projectCode;
	},

	methods: {
		changeNumber(e){
			this.as=e.target.value;
			 
		},
		yyyy(e){
			this.centerNumber=e;
			//console.log(e);
			
		},
		 showModal(e) {
		 	this.modalName = e.currentTarget.dataset.target;
			 
		 },
		hideModal(e) {
			this.modalName = null
		},
		hideModalyes(e){
			
			this.modalName = null;
			console.log(this.centerNumber);
			var numReg = /^\+?[1-9][0-9]*$/;
			 
			 
			if(!numReg.test(this.as)){
				 uni.showToast({
				 	title:'请输入数字',
					duration:2000
				 })
			}else{
				for(var i=0;i<this.swipeList.length;i++){
					 this.swipeList[this.centerNumber].selectNumber=this.as;
				}
				this.as="";
					uni.setStorage({
						key: 'add',
						data: this.swipeList
					});
			}
			
		},
			
		RadioChange(e) {
			this.radio = e.detail.value
		},
		ChooseCheckbox(e) {
			let items = this.checkbox;
			let values = e.currentTarget.dataset.value;
			for (let i = 0, lenI = items.length; i < lenI; ++i) {
				if (items[i].value == values) {
					items[i].checked = !items[i].checked;
					break
				}
			}
		},
		// addNum(e) {
		// 	for (let i = 0; i < this.swipeList.length; i++) {
		// 		var newarr = [];
		// 		newarr.push(this.swipeList[e]);
		// 	}
		// 	++newarr[0].selectNumber;
		// 	uni.setStorage({
		// 		key: 'add',
		// 		data: this.swipeList
		// 	});
		// },

		// deleteNum(e) {
		// 	for (let i = 0; i < this.swipeList.length; i++) {
		// 		var deletearr = [];
		// 		deletearr.push(this.swipeList[e]);
		// 	}

		// 	if (deletearr[0].selectNumber <= 1) {
		// 		deletearr[0].selectNumber = 1;
		// 	} else if (deletearr[0].selectNumber > 1) {
		// 		--deletearr[0].selectNumber;
		// 	}
		// 	uni.setStorage({
		// 		key: 'add',
		// 		data: this.swipeList
		// 	});
		// },
		value(e) {
			this.number = e.target.value;
		},
		centerOk() {
			uni.showModal({
				title: '提示',
				content: '是否提交人物信息',
				success: res => {
					if (res.confirm) {
						// let pc = [
						//     {
						//      vistNumber: this.number,
						//      projectCode: this.projectCode,
						//      doctorCode: 'admin',
						//      doctorName: '管理员',
						//      infoType: '门诊',
						//      orderNo: '104009064'
						//     }
						//    ];
						var json = {};
						var newss = [];
						var json2={}
						for (var i = 0; i < this.swipeList.length; i++) {
							json.vistNumber = this.swipeList[i].number;
							json.orderNo=this.swipeList[i].orderNo;
							json2=Object.assign({
								     projectCode: this.projectCode,
								     doctorCode: 'admin',
								     doctorName: '管理员',
								     infoType: '门诊',
							},json)
							 
							 newss.push(json2);
						}
                           
						   console.log(newss)
						 
						 
						 

						uni.request({
							url: 'http://192.168.0.114:8888/api/app/confirmCharging/addPatientCureRecord',
							method: 'POST',
							data: JSON.stringify(newss),
							dataType: 'json'
						}).then(data => {
							var [error, res] = data;

							console.log(res.data);
							if (res.data== 1) {
								uni.showToast({
									title: '提交成功',
									duration: 1000
								});
							} else {
								uni.showToast({
									title: '提交失败',
									duration: 1000
								});
							}
						});

						this.swipeList = [];
						uni.setStorage({
							key: 'add',
							data: this.swipeList
						});

						this.number = '';
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
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
					url:
						'http://192.168.0.114:8888/api/app/confirmCharging/GetPatienInfo?where=' +
						this.number +
						'&StartTime=2019-09-30&endTime=2019-10-01&projectCode=' +
						this.projectCode +
						'',
					method: 'GET'
				}).then(data => {
					var [error, res] = data;
					console.log(res);
					if(res.data==''){
						uni.showToast({
							title:'所查用户不存在',
							duration:2000
						})
					} 
					let name = res.data[0].patientName;
					let holder = res.data[0].sex;
					let age = res.data[0].age;
					this.bed = res.data[0].wardName;
					let number = res.data[0].visitNumber;
					let orderNo = res.data[0].orderNo;
					this.hostipalnum = res.data[0].wardName;
					this.swipeList.push({
						options: [
							 
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],

						name: name,
						orderNo: orderNo,
						holder: holder,
						age: age,
						bed: this.bed,
						number: number,
						hostipalnum: this.hostipalnum,
						selectNumber: this.selectNumber
					});
					uni.setStorage({
						key: 'add',
						data: this.swipeList
					});

					this.number = '';
				});
			}
		},
		listItem() {
			let that = this;
		},
		back() {
			uni.reLaunch({
				url: './check'
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
							this.swipeList.splice(index, 1);
							uni.setStorage({
								key: 'add',
								data: this.swipeList
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else if (content.text === '添加') {
				if (this.swipeList.length < 100) {
					this.swipeList.push({
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
			} 
			 else {
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
		background: #1296db;
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
	 .xiugaiDay{
		 position: absolute;
		 top: 15px;
		 
	 }
#fankui {
	position: absolute;
	left: 95px;
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
.cu-form-group .title {
		min-width: calc(4em + 15px);
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

	vertical-align: middle;
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

.list {
	width: 94%;
	height: 135px;
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
	width: 96%;
	height: 100px;
	border-bottom: 1px solid #b2b2b2;

	position: relative;
	left: 2%;
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
