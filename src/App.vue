<template>
  <div id="app">
  <!-- keep-alive是vue内置组件，能够在组建切换时将状态保存在内存中，防止重复渲染DOM, 本项目中可解决从首页到城市选择页面重复加载city.json的问题 -->
    <keep-alive>
       <!-- 显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
