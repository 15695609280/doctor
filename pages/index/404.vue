<template>
	<view>
	<vrow class="row" >
	    <vcol span="50"><view class="col"> 50% </view></vcol>
	    <vcol span="50">
	        <vrow class="row" >
	            <vcol span="20"><view class="col"> 嵌套20%</view></vcol>
	            <vcol span="30"><view class="col"> 嵌套30%</view></vcol>                  
	        </vrow>
	    </vcol>
	</vrow>
	<vrow class="row" :retract="20" >
	    <vcol span="40"><view class="col">前20%、后40%</view></vcol>
	    <vcol span="40"><view class="col">40%</view></vcol>
	</vrow>
	<vrow class="row" :align="'center'">
	    <vcol span="75"><view class="col"> 居中75% </view></vcol>         
	</vrow>
	<vrow class="row" :align="'flex-end'">
	    <vcol span="30" ><view class="col"> 右对齐30% </view></vcol>           
	    <vcol span="40" ><view class="col"> 右对齐40% </view></vcol>           
	</vrow>
	<vrow class="row" :align="'space-between'">
	    <vcol span="40" ><view class="col"> 两端对齐40% </view></vcol>          
	    <vcol span="40" ><view class="col"> 两端对齐40% </view></vcol>          
	</vrow>
	<vrow class="row" :align="'space-around'">
	    <vcol span="20" ><view class="col"> 等距20% </view></vcol>            
	    <vcol span="20" ><view class="col"> 等距20% </view></vcol>            
	    <vcol span="20" ><view class="col"> 等距20% </view></vcol>            
	    <vcol span="20" ><view class="col"> 等距20% </view></vcol>            
	</vrow>
	</view>
</template>

<script>
	import vcol from '@/components/lml-layout/col.vue'
	import vrow from '@/components/lml-layout/row.vue'
	export default {
		name: 'page',
		components:{
			 vrow,vcol
		},
		data: function() {
			return {}
		},
	}
</script>

<style style scoped lang="less">
.row{     
   

}
.col{      
	height: 100px;
display: flex;
justify-content: center;        
flex-wrap: wrap;
background: #2C405A;
 
color: #FBBD08;
font-size: 30upx; 
line-height: 200upx;
margin-top: 20upx;
 
}
</style>
