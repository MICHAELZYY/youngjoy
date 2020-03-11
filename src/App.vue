<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'App',
  components:{
    Header: Header
  }
  
}
</script>

<style>
html,body,#app  {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(238, 240, 232);
  /* margin-top: 60px; */
  height: 100%
}
html,body{
  /* height: 100%; */
  margin: 0px;
}
</style>
