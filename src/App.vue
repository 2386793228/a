<template>
  <div id="app">
    <!-- <hello-world/> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from "components/HelloWorld";

export default {
 name: 'App',
 components:{
    // HelloWorld
  
 },
}
</script>

<style scoped>
  @import "assets/css/base.css";
  @import url("~assets/icfont/iconfont.css");
  #app{
    background-color: #f2f2f2;
    box-sizing: border-box;
    text-align: center;
    /* width: 100%; */
    height: 100vh;
    margin: auto;
    border: 1px solid #fff;
  }
</style>
