<template>
	<div id="chanpin">
		<div class="banner">
			<img src="../assets/images/banner3.jpg">
		</div>

		
		<div id="content">
			<transition-group  name='cp_box' tag='div' class='transiton_box'  :duration="1200">
			<div class="cont_box" v-for="item in listAry" :key='item.id'>
				<img :src="item.urlImg" class="cont_box_l">
				<div class="cont_box_r">
					<h3>{{item.title}}</h3>
					<p>{{item.content}}</p>
				</div>
			</div>	
			</transition-group>
		</div>
		
		  <v-footer></v-footer>
	</div>
</template>

<script>
	import footer from '@/components/footer'
	export default {
		data(){
			return{
				listAry:[]
			}
		},
		created(){
			this.list()
		},
		methods:{
			list(){
				this.axios.get('/static/chanpin.json').then(res=>{
					this.listAry=res.data;
					console.log(this.listAry)
				})
			}
		},
		components:{
			'v-footer':footer
		}
	}
</script>

<style scoped>
	#chanpin{
		background: #f0f8fb;
		
	}
	.banner{	
		max-width: 1920px;
		height: 550px;
		overflow: hidden;
		margin: auto;
	}

	.banner img{
		width: 100%;
	}
	#content{
		width: 1200px;
		margin:auto;
		
		padding-top:70px
	}
	.transiton_box{
		justify-content: space-between;
		display: flex;
		flex-wrap:wrap;
		width: 100%;
	}
	.cont_box_l{
		width: 229px;
        height: 170px;
	}
	.cont_box_r{
		flex: 1;
		text-align: left;
		padding:0 12px;
	}
	.cont_box{
		width: 590px;
		background: #fff;
		display: flex;
		padding: 16px;
		margin: 10px 0;
		box-sizing: border-box;
	}
	.cont_box_r h3{margin: 0;font-size: 18px;}
	.cont_box_r p{margin: 0;font-size: 12px;color: #999;line-height: 1.7;}
	.cp_box-enter,.cp_box-leave-to{
	    opacity: 0;
	    transform: translateY(-200px);	
	}
	.cp_box-enter-active,.cp_box-leave-active{
	    transition: 1.2s;
	}
</style>
