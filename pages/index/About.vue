<template>
	<view class="about">
		<view class="bo">
			 
			
		</view>
		 
	</view>
	
</template>

<script>
	export default {
		 
		data: function() {
			return {
				orderNo:5340
			}
		},
		methods:{
			 
		}
			 
	}
</script>

<style>
   .bo{
	  
	    width: 100px; 
	    height: 100px; 
	    background: yellow; 
	    position: relative;
	    animation: begin 5s;
		 
   
   }
   @-webkit-keyframes begin{
   	 0%   {background: red; left:0px; top:0px;}
   	 25%  {background: yellow; left:200px; top:0px;}
   	 50%  {background: blue; left:200px; top:200px;}
   	 75%  {background: green; left:0px; top:200px;}
   	 100% {background: red; left:0px; top:0px;}
   }
    
   
</style>
