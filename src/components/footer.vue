<template>
	<div id="footer">
		<div class="box_ul">
			<ul>
				<li><router-link to='about'>公司介绍</router-link></li>
				<li><router-link to='news'>企业新闻</router-link></li>
				<li><router-link to='jobs'>加入我们</router-link></li>
				<li><router-link to='contact'>联系我们</router-link></li>
			</ul>
		</div>
		<p class="footer_p">北京方游网络科技有限公司 京ICP备17063623号-4   Copyright2018-2020 qwyouxi.com All Rights Reserved.</p>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
		
	}
</script>

<style>
	#footer{
		height: 150px;
		width: 100%;
		min-width: 1200px;
		background: #4f5d66;
		color: #fff;
		font-size: 14px;
		box-sizing: border-box;
		padding-top: 25px;
		margin-top: 100px;
	}
	.box_ul{
		width: 800px;
		text-align: center;
		margin: auto;
	}
	#footer ul{padding: 0;}
	#footer ul li{
		display: inline-block;
		width: 150px;
		cursor: pointer;
	}
	#footer ul li a{color: #fff;}
	#footer ul li a:hover{
		color: #409EFF;
	}
	.footer_p{
		margin-top: 30px;
	}
</style>
