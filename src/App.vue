<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
html,body,#app  {
  font-family: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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
