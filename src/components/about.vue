<template>
    <div>
       <div class="about_banner"></div>
	   <div id="about_box"> 
		   <div class="about_info">
			   <div class="info_left">   
			   </div>
			   <div class="info_right">
				   <p>趣玩游戏是北京无锋互娱科技有限公司旗下发行品牌，成立于2014年初，是一家以游戏业务为核心，业内前沿的综合性互联网发行公司。</p>
                   <p>一直以来，趣玩游戏保持着对互联网前沿趋势的敏锐嗅觉，以坚持不懈的毅力和矢志不渝的动力发展着新模式与新业务。瞄准互联网的巨大增量空间，趣玩游戏从常规手游发行、长尾渠道发行、BT渠道发行等方向，提供有强有力的手游发行服务。基于专业的移动游戏发行团队，趣玩游戏已建立起完善的评优系统、渠道系统、运营系统及营销系统，并具备快速、有效、深度的游戏发行、运营能力。趣玩游戏对旗下发行的每款产品实行深度介入，依托四大系统保证产品最终的运营效果及价值体现。</p>
			   </div>
		   </div>
		   <div class="about_list">
			    <div class="list_left">   
			   </div>
			   <div class="list_right">
				   <div class="list_box" v-for="item in aboutList" :key='item.id'>
					   <div class="list_icon">
						  <img src="../assets/images/about_icon_01.png">
						   </div>
					   <div class="list_cont">
						   <h3 class="list_title">{{item.title}}</h3>
						   <p class="list_p">{{item.content}}</p>
					   </div>
				   </div>
				   
			   </div>
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
               aboutList:[]
            }
        },
        created(){
           this.addList()
        },
        methods:{
          addList(){
			  this.axios.get("/static/about.json").then(res=>{
				  this.aboutList=res.data
				  
			  })
		  }
        },
		components:{
			'v-footer':footer
		}
    }
</script>

<style scoped>
.about_banner{
	background: url(../assets/images/about_banner.jpg) no-repeat center center;
	max-width: 1920px;
	min-width: 1200px;
	height: 162px;
	margin: auto;
}
#about_box{
	width: 1200px;
	margin: auto;
}
.about_info{
	border-bottom: 1px solid #ccc;
	display: flex;
	margin-top:20px ;
}
.about_list{
	display: flex;
	margin-top:40px ;
}
.info_left,.list_left{
	height: 50px;
	width: 172px;
	background: url(../assets/images/about_l.png)no-repeat;
	margin-top: 20px;
}
.list_left{
	background-position: 0px -50px;
}
.info_right{
	flex: 1;
	text-align: left;
	padding-left: 30px;
	text-indent: 2rem;
	font-size: 14px;
	color: #444;
}
.list_right{
	flex: 1;
}
.list_box{
	display: flex;
	margin-top: 18px;
	margin-left: 28px;
}
.list_icon{
	width: 57px;
    height: 57px;
}
.list_cont{
	flex: 1;
	text-align: left;
	color: #444;
	
	padding-left: 20px;
}
.list_cont h3{
	margin: 0;
	margin-bottom: 8px;
	font-size: 15px;
}
.list_cont p{
	margin: 0;
	line-height: 1.5;
	font-size: 12px;
}

</style>
