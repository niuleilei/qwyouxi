import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import footer from '@/components/footer'
import home from '@/components/home'
import chanpin from '@/components/chanpin'
import about from '@/components/about'
import news from '@/components/news'
import jobs from '@/components/jobs'
import contact from '@/components/contact'
import newsContent from '@/components/newsContent'
Vue.use(Router)

export default new Router({
  routes: [
		{path:'/',redirect:'home'},
    {
      path: '/',
      component:index,
			children:[
				{
					path:'home',
					component:home,
					meta:{title:'首页'}
				},
				{
					path:'chanpin',
					component:chanpin,
					meta:{title:'企业产品'}
				},
				{
					path:'about',
					component:about,
					meta:{title:'关于我们'}
				},
				{
					path:'news',
					component:news,
					meta:{title:'企业新闻'}
				},
				{
					path:'news/newsContent',
					component:newsContent,
					meta:{title:'新闻详情'}
				},
				{
					path:'jobs',
					component:jobs,
					meta:{title:'人才招聘'}
				},
				{
					path:'contact/:id',
					component:contact,
					name:'contact',
					meta:{title:'联系我们'}
				}
			]
		
    }
  ],
	linkActiveClass:'is-active'
})

