<template>
  <div id="app">
      <router-view  v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
	html,body{padding: 0;margin: 0;min-height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
	overflow-x: hidden;
	margin-top: 61px;
}
ul,li{list-style: none;}
a{text-decoration: none;}
#app #carousel_banner .el-carousel__container{
	height: 550px;
}
</style>
