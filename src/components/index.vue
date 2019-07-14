<template>
	<div>
		<el-menu :default-active="activeIndex" class="el-menu-demo top_nav" mode="horizontal" router>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/chanpin">企业产品</el-menu-item>
			<el-menu-item index="/news">企业新闻</el-menu-item>
			<el-menu-item index="/home" style='border: 0;'><img src="../assets/images/logo.png" height="40"/></el-menu-item>
			<el-menu-item index="/jobs">人才招聘</el-menu-item>
			<el-menu-item index="/about">关于我们</el-menu-item>
			<el-menu-item index="/contact/1">联系我们</el-menu-item>
		</el-menu>
		
		 <transition name='slide' mode="out-in">
		   <router-view></router-view>
		 
		</transition>
		 
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
		computed: {
			activeIndex: function(){
				console.log(this.$route)
				return this.$route.path;
				
			}
		}
		
	}
</script>

<style scoped>
	
	.top_nav{position: fixed;top: 0;left: 0;z-index: 100;width: 100%;}
	.el-menu--horizontal>.el-menu-item{
		float: none;
		display: inline-block;
		margin: 0 40px;
	}
	.el-menu-item.is-active{
		font-size: 16px;
	}
	 .slide-enter{
	    opacity: 0;
	   transform: translateX(100%);
		transform-origin: left top;
	     transform: scale(0.5);
		 
		 
	}
	.slide-leave-to{
	    opacity: 0;
	    transform: translateX(-100%);
		transform: scale(0);
		transform-origin: left top;
	    position: absolute;
		
	}
	.slide-enter-active,.slide-leave-active{
	    transition: 0.5s;
	}
	
</style>
