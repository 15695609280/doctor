<template>
    <view class="warp">
		<mt-button type="primary">mint-ui</mt-button>
		<!-- <button type="primary" size="mini" class="buttonTop">确定</button> -->
         <view class="input">
         	<input  type="text" @input="number" :value="value" placeholder="输入的二维码数"/>
			<button type="primary" size="mini" @click="search">搜索</button>
         </view>
        <view class="box">
            
            <t-table border="2" border-color="#95b99e" :is-check="true" @change="change">
                
                <t-tr font-size="12" color="#5d6f61" align="right" v-for="(item,index) in tableList" :key="item.index">
                    <t-td align="left">{{ item.name }}</t-td>
                     
                    
                </t-tr>
            </t-table>
        </view>
    </view>
</template>

  <script>
    import tTable from  'components/t-table/t-table.vue';
    import tTh from '@/components/t-table/t-th.vue';
    import tTr from '@/components/t-table/t-tr.vue';
    import tTd from '@/components/t-table/t-td.vue';
    export default {
        components: {
            tTable,
            tTh,
            tTr,
            tTd
        },
		onLoad(res) {
			console.log(res);
			 
		},
        data() {
            return {
				value:'',
                tableList: [{name:'全选'},{name:'888'},{name:'999'},{name:'9'},{name:'9'}] 
                
            };
        },
		onShow() {
			
	            	
		},
        methods: {
            change(e) {
				let table=this.tableList.slice(1,this.tableList.length)
				let newTable=JSON.parse(JSON.stringify(table))
                //console.log(e.detail);
				let newarr=[]
				for(let i=0;i<newTable.length;i++){
					 for(let j=0;j<e.detail.length;j++){
						   //console.log(e.detail[j])
						    
						   newarr.push(newTable[e.detail[j]])
					 }
				}
				
				let old=newarr.slice(0,e.detail.length)
				//console.log(old)
            },
			number(e){
				this.value=e.target.value;
				 
			},
			search(){
				if(!this.value){
					uni.showToast({
						title:'请扫码获取id',
						duration:1000
					})
				}else{
					this.tableList.push({name:this.value})
					this.value=''
				}
				
			}
            
        }
    };
	</script>
	 
	<style>
		.buttonTop{
			position: relative;
			top: 10px;
			left: 80%;
		}
		.input{
			width: 100%;
			position: relative;
		}
		.input button{position: absolute;left: 80%;top: 16px;}
		.input input{
			width:  66%;
			 
			border: 1px solid #888888;
			position: relative;
			top: 20px;
			margin-left: 5px;
			padding-left: 20px;
			 
		}
		.box{
			position: relative;
			top: 40px;
		}
	</style>