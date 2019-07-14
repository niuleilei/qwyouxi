<template>
    <div>
       <div id="contact_banner">
		   <div class="banner_img">
			   <img src="../assets/images/contact_03.png">
		   </div>
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
           console.log(this.$router.linkActiveClass)
        },
		
        methods:{
         
        },
		watch: {
		  $route(to, from) {
			 // to 和 from 都是 路由信息对象
			 console.log(to)
			  console.log(from)
		  }
}
    }
</script>

<style scoped>
#contact_banner{
	background: url(../assets/images/news.jpg) no-repeat center;
	height: 162px;
	max-width: 1920px;
	min-width: 1200px;
	margin: auto;
}
.banner_img{width: 1200px;margin: auto;text-align: left;}

</style>
