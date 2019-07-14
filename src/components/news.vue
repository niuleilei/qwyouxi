<template>
    <div>
       <div id="news_banner">
		   <div class="banner_img">
			   <img src="../assets/images/news_03.png">
		   </div>
	   </div>
	   <div class="news_list">
		   <ul class="list_ul">
			   <router-link to='news/newsContent' tag='li' v-for="item in list" :key='item.id'>
				   <a href="#">{{item.title}}</a>
				   <span>{{item.date}}</span>
			   </router-link>
		   </ul>
		   <div class="list_r">
			   <img src="../assets/images/cp_08.jpg">
			   <img src="../assets/images/cp_08.jpg">
			   <img src="../assets/images/cp_08.jpg"> 
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
               list:[]
            }
        },
        created(){
           this.newsList()
        },
        methods:{
          newsList(){
			  this.axios.get("/static/news.json").then(res=>{
				  console.log(res)
				  this.list=res.data
			  })
		  }
        },
		components:{
			'v-footer':footer
		}
    }
</script>

<style scoped lang="less">
#news_banner{
	background: url(../assets/images/news.jpg) no-repeat center;
	height: 162px;
	max-width: 1920px;
	min-width: 1200px;
	margin: auto;
}
.banner_img{width: 1200px;margin: auto;text-align: left;}
.news_list{
	width: 1200px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	margin-top: 100px
}
.list_ul{
	flex: 1;
	margin-right: 50px;
	box-sizing: border-box
}
.list_r{
	width: 350px;
	text-align: right;
	display: block;
	img{
		width: 250px;
		margin-bottom: 6px
	}
}
.news_list li{
	width: 100%;
	border-bottom: 1px solid #eee;
	line-height: 40px;
	text-align: left;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	padding: 0 12px;
	box-sizing: border-box;
	&:hover{
		border-bottom: 1px solid #409EFF;
		cursor: pointer
	}
	&:hover a{
		color: #409EFF
	}
}
.news_list li a{
	color: #666;
	
}
.news_list li span{
	color: #999;
	font-size: 12px;
}
</style>
