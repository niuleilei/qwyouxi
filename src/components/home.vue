<template>
   <div>
	   
	   <el-carousel id='carousel_banner'>
	     <el-carousel-item>
	   	    <img src="../assets/images/banner1.jpg">
	     </el-carousel-item>
	      <el-carousel-item>
	     		<img src="../assets/images/banner2.jpg">
	     </el-carousel-item>
	      <el-carousel-item>
	     		<img src="../assets/images/banner3.jpg">
	     </el-carousel-item>
	      <el-carousel-item>
	     		<img src="../assets/images/banner4.jpg">
	     </el-carousel-item>
	   </el-carousel>
	   <div class="imgList">
	   	<div class="box_img">
	   		<div class="box_bg"></div>
	   		<img src="../assets/images/2.jpg">
	   		<h3>企业产品</h3>
	   	</div>
	   	<div class="box_img">
	   		<div class="box_bg"></div>
	   		<img src="../assets/images/3.jpg">
	   		<h3>企业新闻</h3>
	   	</div>
	   	<div class="box_img">
	   		<div class="box_bg"></div>
	   		<img src="../assets/images/4.jpg">
	   		<h3>人才招聘</h3>
	   	</div>
	   	<div class="box_img">
	   		<div class="box_bg"></div>
	   		<img src="../assets/images/5.jpg">
	   		<h3>关于我们</h3>
	   	</div>
	   	
	   </div>
	  
	   <v-footer></v-footer>
   </div>
   
    
</template>

<script>
	import footer from '@/components/footer'
    export default {
        data(){
            return{
				
			  
            }
        },
      
        methods:{
        
        },
		components:{
			'v-footer':footer
		}
    }
</script>

<style scoped>
#carousel_banner{
		max-width: 1920px;
		margin: 0 auto;
		
	}
	
	.el-carousel__item{
	/*弹性盒模型*/    
	display:flex;
	/*主轴居中对齐*/
	justify-content: center;
	/*侧轴居中对齐*/    
	align-items: center;
	 
	}
	#carousel_banner .el-carousel__item img{
		vertical-align: middle;
	}
	.imgList{
		max-width: 1200px;
		margin: 0 auto;
		margin-top: 100px;
		display: flex;
		justify-content:space-between;
		
	}
	
	.box_img{
		position: relative;
		height: 180px;width: 270px;
		overflow: hidden;
		cursor: pointer;
	}
	.box_bg{
		height: 100%;width: 100%;
		background: #000;
		opacity: 0.6;
		position: absolute;left: 0;top: 0;
	}
	.box_img img{
		height: 100%;width: 100%;
		position: absolute;left: 0;top: 0;
		z-index: -1;
	}
	.box_img:hover img{
		transform: scale(1.1);
		transition: 0.2s ease-out;
	}
	.box_img:hover .box_bg{
		transform: translateY(-180px);
		transition: 0.2s ease-out 0.1s;
	}
	.box_img h3{
		position: absolute;left: 0;bottom: 0;
		width: 100%;
		color: #fff;
	}
</style>
