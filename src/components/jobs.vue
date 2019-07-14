<template>
    <div>
       <div id="news_banner">
		   <div class="banner_img">
			   <img src="../assets/images/join_03.png">
		   </div>
	   </div>
	   <div class="jobs_list">
		   <ul>
		   	 <li>
				 <img src="../../build/logo.png">
				 <h3>123</h3>
				 <div class="list_cont">
					 <div>123</div>
					 <div>123</div>
					 <div>123</div>
				 </div>
			 </li>
		   </ul>
	   </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               
            }
        },
        created(){
           
        },
        methods:{
         
        }
    }
</script>

<style scoped>
#news_banner{
	background: url(../assets/images/join.jpg) no-repeat center;
	height: 162px;
	max-width: 1920px;
	min-width: 1200px;
	margin: auto;
}
.banner_img{width: 1200px;margin: auto;text-align: left;}
.jobs_list{
	width: 1200px;
	margin: auto;
	ul li{
       	border-bottom: 1px solid #ccc;	
	}
}
</style>
